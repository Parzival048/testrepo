import { NextRequest, NextResponse } from 'next/server';
import { supabase, Lead } from '@/lib/supabase';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Prepare lead data
        const leadData: Lead = {
            name: body.name.trim(),
            email: body.email.trim().toLowerCase(),
            phone: body.phone?.trim() || null,
            interest: body.interest || 'general',
            message: body.message?.trim() || null,
            source: 'landing_page',
            status: 'new',
        };

        // Insert into Supabase
        const { data, error } = await supabase
            .from('leads')
            .insert([leadData])
            .select()
            .single();

        if (error) {
            // Check for duplicate email error
            if (error.code === '23505') {
                return NextResponse.json(
                    { error: 'This email is already registered. We will contact you soon!' },
                    { status: 409 }
                );
            }

            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to submit lead. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: 'Thank you! We will contact you shortly.',
                data
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { message: 'Leads API is running' },
        { status: 200 }
    );
}
