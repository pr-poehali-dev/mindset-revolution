import json
import os
from typing import Dict, Any
import psycopg2

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Возвращает количество зарегистрированных участников по типам заявок
    Args: event - dict с httpMethod
          context - объект с request_id
    Returns: HTTP response с количеством заявок
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
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
    
    # Connect to database and get counts
    conn = psycopg2.connect(database_url)
    cur = conn.cursor()
    
    # Get total count
    cur.execute("SELECT COUNT(*) FROM leads WHERE lead_type = 'masterclass'")
    masterclass_count = cur.fetchone()[0]
    
    cur.execute("SELECT COUNT(*) FROM leads WHERE lead_type = 'checklist'")
    checklist_count = cur.fetchone()[0]
    
    cur.execute("SELECT COUNT(*) FROM leads")
    total_count = cur.fetchone()[0]
    
    cur.close()
    conn.close()
    
    # Return counts
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'masterclass': masterclass_count,
            'checklist': checklist_count,
            'total': total_count
        })
    }
