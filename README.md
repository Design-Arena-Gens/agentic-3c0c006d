# AI Voice Receptionist System

Production-ready AI voice receptionist that answers inbound phone calls, sounds natural and human, qualifies callers, and books appointments automatically.

## 🎯 System Overview

This system orchestrates:
- **Phone System**: VoIP integration (Twilio/Vonage) for inbound calls
- **AI Voice Agent**: Speech-to-text → AI reasoning → Text-to-speech pipeline
- **n8n Orchestration**: Self-hosted workflow automation running 24/7
- **Data Storage**: Google Sheets for lead tracking
- **Calendar**: Google Calendar for appointment scheduling

## 🏗️ Architecture

```
Caller → VoIP → n8n → [STT → AI → TTS] → VoIP → Caller
                  ↓
           [Google Sheets + Calendar]
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Deploy n8n Workflow

1. Install n8n (Docker recommended):
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

2. Import workflow:
   - Open n8n at http://localhost:5678
   - Go to Workflows → Import
   - Upload `n8n-workflow.json`
   - Configure all credentials
   - Activate workflow

### 5. Configure Twilio

1. Create Twilio account
2. Purchase phone number
3. Set webhook URL to: `https://your-n8n-instance.com/webhook/inbound-call`
4. Enable Voice Streams

## 📋 Required Services

| Service | Purpose | Cost |
|---------|---------|------|
| Twilio | Phone system | $1/mo + usage |
| Deepgram | Speech-to-text | $0.0043/min |
| OpenAI | AI reasoning | $0.01/1K tokens |
| ElevenLabs | Text-to-speech | $5/mo starter |
| Google Workspace | Sheets + Calendar | Free |
| n8n | Workflow orchestration | Self-hosted (free) |

## 🔧 Configuration

### System Prompt

Edit `system-prompt.txt` to customize:
- Business name
- Receptionist personality
- Service descriptions
- Objection handling
- Conversation flow

### Calendar Settings

In `.env`:
- `GOOGLE_CALENDAR_ID`: Your calendar ID
- `DEFAULT_APPOINTMENT_DURATION`: Minutes (default: 60)
- `BUSINESS_TIMEZONE`: e.g., "America/New_York"

### Spreadsheet Schema

Required columns in Google Sheets:
- Name
- Phone
- Email
- Reason for Call
- Appointment Date
- Appointment Time
- Timestamp
- Status

## 📊 Data Flow

1. **Call received** → n8n webhook triggered
2. **Audio stream** → Deepgram (Speech-to-Text)
3. **Transcript** → OpenAI GPT-4 (AI reasoning)
4. **AI response** → ElevenLabs (Text-to-Speech)
5. **Audio** → Back to caller
6. **Loop** until appointment confirmed
7. **Data saved** → Sheets + Calendar in parallel

## 🎯 Call Flow

1. **Greeting**: AI answers immediately with warm introduction
2. **Intent Detection**: Classify caller purpose (booking/inquiry/complaint)
3. **Information Collection**: Natural conversation to gather details
4. **Availability Check**: Real-time calendar query
5. **Booking**: Confirm or offer alternatives
6. **Confirmation**: Email + calendar event created
7. **Closure**: Professional sign-off

## 🔐 Security

- Store API keys in environment variables
- Enable webhook authentication (validate Twilio signatures)
- Use SSL/TLS for all communications
- Restrict Google service account permissions
- Implement rate limiting
- Log calls but redact PII

## 📈 Scaling for Multiple Clients

1. Create separate n8n workflows per client
2. Store client configs in database
3. Use Twilio subaccounts for isolation
4. Implement usage tracking and billing
5. White-label dashboard for self-service
6. Monitor per-client metrics

## 🧪 Testing

```bash
# Build and test locally
npm run build
npm start

# Call your Twilio number to test the full flow
```

## 🚢 Production Deployment

### Deploy Dashboard to Vercel

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-3c0c006d
```

### Deploy n8n

Recommended: Use DigitalOcean Droplet, AWS EC2, or similar

1. Set up server with SSL
2. Configure domain/subdomain
3. Run n8n with Docker
4. Enable webhook authentication
5. Set up monitoring and alerts

## 📝 Customization Guide

### Change AI Voice

Edit in n8n workflow → "Text-to-Speech (ElevenLabs)" node:
- `ELEVENLABS_VOICE_ID`: Browse voices at elevenlabs.io

### Modify Conversation Logic

Edit `system-prompt.txt` to adjust:
- Greeting style
- Question order
- Objection handling
- Booking pressure level

### Add Custom Fields

1. Update system prompt to collect new data
2. Add column to Google Sheets
3. Update n8n "Append to Google Sheets" node

## 🆘 Troubleshooting

### Call not connecting
- Verify Twilio webhook URL is correct
- Check n8n workflow is activated
- Ensure SSL certificate is valid

### AI not responding
- Verify OpenAI API key is valid
- Check API rate limits
- Review n8n execution logs

### Calendar not updating
- Confirm Google Calendar API is enabled
- Verify service account has calendar access
- Check calendar ID is correct

## 📄 License

MIT

## 🤝 Support

For issues and questions, contact support or review the full documentation in the web interface.

---

**Built for businesses that want to automate their front desk operations with human-like AI.**
