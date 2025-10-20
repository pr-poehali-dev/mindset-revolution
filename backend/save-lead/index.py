import json
import os
from typing import Dict, Any
import psycopg2

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Сохраняет заявки с лендинга в базу данных
    Args: event - dict с httpMethod, body (name, phone, email, lead_type)
          context - объект с request_id
    Returns: HTTP response с результатом сохранения
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Parse request body
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', '').strip()
    phone = body_data.get('phone', '').strip()
    email = body_data.get('email', '').strip() or None
    lead_type = body_data.get('lead_type', 'masterclass')
    
    # Validate required fields
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and phone are required'})
        }
    
    # Validate lead_type
    if lead_type not in ['masterclass', 'checklist']:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Invalid lead_type'})
        }
    
    # Get database URL from environment
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Database configuration error'})
        }
    
    # Connect to database and save lead
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    # Insert lead into database
    cur.execute(
        "INSERT INTO leads (name, phone, email, lead_type) VALUES (%s, %s, %s, %s) RETURNING id",
        (name, phone, email, lead_type)
    )
    lead_id = cur.fetchone()[0]
    
    conn.commit()
    cur.close()
    conn.close()
    
    # Return success response
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'lead_id': lead_id,
            'message': 'Заявка успешно сохранена'
        })
    }
