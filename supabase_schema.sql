-- =============================================
-- GYM LEADS DATABASE SCHEMA
-- Supabase PostgreSQL Database
-- =============================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- LEADS TABLE
-- Stores all lead submissions from the landing page
-- =============================================
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Contact Information
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    
    -- Lead Details
    interest VARCHAR(100) DEFAULT 'general',
    message TEXT,
    
    -- Tracking Information
    source VARCHAR(50) DEFAULT 'landing_page',
    status VARCHAR(20) DEFAULT 'new',
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    CONSTRAINT leads_email_unique UNIQUE (email)
);

-- =============================================
-- INDEXES for better query performance
-- =============================================
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_interest ON leads(interest);

-- =============================================
-- FUNCTION: Update updated_at timestamp
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- =============================================
-- TRIGGER: Auto-update updated_at on row update
-- =============================================
DROP TRIGGER IF EXISTS update_leads_updated_at ON leads;
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- ROW LEVEL SECURITY (RLS) Policies
-- Enable RLS for security
-- =============================================
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow insert from API (service role)
CREATE POLICY "Allow insert for service role" ON leads
    FOR INSERT
    WITH CHECK (true);

-- Policy: Allow select for service role
CREATE POLICY "Allow select for service role" ON leads
    FOR SELECT
    USING (true);

-- Policy: Allow update for service role
CREATE POLICY "Allow update for service role" ON leads
    FOR UPDATE
    USING (true);

-- =============================================
-- SAMPLE DATA (Optional - Comment out in production)
-- =============================================
-- INSERT INTO leads (name, email, phone, interest, message, source, status)
-- VALUES 
--     ('John Doe', 'john@example.com', '+1234567890', 'premium', 'Interested in personal training', 'landing_page', 'new'),
--     ('Jane Smith', 'jane@example.com', '+0987654321', 'basic', 'Looking for membership options', 'landing_page', 'contacted');

-- =============================================
-- COMMENTS
-- =============================================
COMMENT ON TABLE leads IS 'Stores lead information from gym landing page';
COMMENT ON COLUMN leads.id IS 'Unique identifier for each lead';
COMMENT ON COLUMN leads.name IS 'Full name of the lead';
COMMENT ON COLUMN leads.email IS 'Email address (must be unique)';
COMMENT ON COLUMN leads.phone IS 'Phone number with country code';
COMMENT ON COLUMN leads.interest IS 'Type of membership interest (basic, pro, elite, general)';
COMMENT ON COLUMN leads.message IS 'Additional message or notes from the lead';
COMMENT ON COLUMN leads.source IS 'Where the lead came from';
COMMENT ON COLUMN leads.status IS 'Current status (new, contacted, converted, lost)';
COMMENT ON COLUMN leads.created_at IS 'When the lead was created';
COMMENT ON COLUMN leads.updated_at IS 'When the lead was last updated';
