-- Таблица для хранения заявок на мастер-класс
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255),
    lead_type VARCHAR(50) NOT NULL CHECK (lead_type IN ('masterclass', 'checklist')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индекс для быстрого поиска по типу заявки
CREATE INDEX idx_leads_type ON leads(lead_type);

-- Индекс для поиска по дате
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);