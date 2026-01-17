'use client'

import { useState } from 'react'
import { Phone, Calendar, Users, Settings, FileSpreadsheet, Workflow, CheckCircle, AlertCircle } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Phone className="h-8 w-8 text-blue-400" />
              <span className="ml-3 text-xl font-bold text-white">AI Voice Receptionist</span>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Dashboard
              </button>
              <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Documentation
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Deploy
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Production-Ready AI Receptionist</h1>
          <p className="text-gray-300 text-lg">Automated phone answering, lead qualification, and appointment booking system</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<Phone className="h-6 w-6" />}
            title="Active Calls"
            value="24"
            change="+12%"
            positive={true}
          />
          <StatCard
            icon={<Calendar className="h-6 w-6" />}
            title="Appointments Booked"
            value="147"
            change="+28%"
            positive={true}
          />
          <StatCard
            icon={<Users className="h-6 w-6" />}
            title="Lead Conversion"
            value="68%"
            change="+5%"
            positive={true}
          />
          <StatCard
            icon={<CheckCircle className="h-6 w-6" />}
            title="System Uptime"
            value="99.9%"
            change="Stable"
            positive={true}
          />
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 mb-8">
          <div className="border-b border-white/10">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {['overview', 'architecture', 'workflow', 'setup'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'border-blue-500 text-white'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && <OverviewTab />}
            {activeTab === 'architecture' && <ArchitectureTab />}
            {activeTab === 'workflow' && <WorkflowTab />}
            {activeTab === 'setup' && <SetupTab />}
          </div>
        </div>

        <SystemPromptSection />
        <IntegrationsSection />
      </main>
    </div>
  )
}

function StatCard({ icon, title, value, change, positive }: any) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-blue-400">{icon}</div>
        <span className={`text-sm font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>
          {change}
        </span>
      </div>
      <h3 className="text-gray-300 text-sm font-medium mb-1">{title}</h3>
      <p className="text-white text-2xl font-bold">{value}</p>
    </div>
  )
}

function OverviewTab() {
  return (
    <div className="space-y-6 text-gray-200">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">System Overview</h2>
        <p className="mb-4">
          This is a production-ready AI voice receptionist system that handles inbound phone calls with human-like conversation,
          qualifies leads, and automatically books appointments. Built for businesses that want to automate their front desk operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <FeatureCard
            title="Natural Conversation"
            description="Sounds human, not robotic. Uses short sentences, natural pauses, and warm tone."
          />
          <FeatureCard
            title="Lead Qualification"
            description="Collects caller info: name, phone, email, reason for call, and preferred appointment time."
          />
          <FeatureCard
            title="Auto Booking"
            description="Checks availability, offers alternatives, and confirms appointments in real-time."
          />
          <FeatureCard
            title="CRM Integration"
            description="Automatically logs all data to spreadsheets and creates Google Calendar events."
          />
        </div>
      </section>

      <section className="border-t border-white/10 pt-6">
        <h3 className="text-xl font-bold text-white mb-3">Core Components</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
            <span><strong>Phone System:</strong> VoIP integration (Twilio/Vonage) for inbound call handling</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
            <span><strong>AI Voice Agent:</strong> Speech-to-text, reasoning engine, text-to-speech pipeline</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
            <span><strong>n8n Orchestration:</strong> Self-hosted workflow automation running 24/7</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
            <span><strong>Data Storage:</strong> Google Sheets/Excel for lead tracking</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
            <span><strong>Calendar System:</strong> Google Calendar integration for appointment scheduling</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

function ArchitectureTab() {
  return (
    <div className="space-y-6 text-gray-200">
      <h2 className="text-2xl font-bold text-white mb-4">System Architecture</h2>

      <div className="bg-black/30 rounded-lg p-6 font-mono text-sm border border-white/10 overflow-x-auto">
        <pre className="text-green-400">{`
┌─────────────────────────────────────────────────────────────────┐
│                    INBOUND PHONE CALL                           │
│                   (Caller dials business)                       │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                  VOIP PHONE SYSTEM                              │
│              (Twilio / Vonage / 3CX)                            │
│  • Receives call                                                │
│  • Forwards to webhook                                          │
│  • Streams audio bidirectionally                                │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                   n8n ORCHESTRATION HUB                         │
│                  (Self-hosted, 24/7)                            │
│                                                                 │
│  [Webhook Trigger] → [Call Session Manager]                    │
│         ↓                                                       │
│  [Voice AI Loop]                                                │
│    ├─ Speech-to-Text (Deepgram/AssemblyAI)                     │
│    ├─ AI Reasoning (OpenAI GPT-4 / Anthropic Claude)           │
│    ├─ Text-to-Speech (ElevenLabs/PlayHT)                       │
│    └─ Conversation State Manager                               │
│         ↓                                                       │
│  [Data Extraction] → Extract structured JSON                   │
│         ↓                                                       │
│  [Calendar Check] → Query Google Calendar API                  │
│         ↓                                                       │
│  [Booking Decision]                                             │
│    ├─ Available? → Confirm booking                             │
│    └─ Unavailable? → Offer alternatives                        │
│         ↓                                                       │
│  [Data Write Parallel]                                          │
│    ├─ Google Sheets (append row)                               │
│    └─ Google Calendar (create event)                           │
│         ↓                                                       │
│  [Confirmation] → Send to caller                               │
└─────────────────────────────────────────────────────────────────┘
                         │
            ┌────────────┴────────────┐
            ▼                         ▼
┌─────────────────────┐   ┌──────────────────────┐
│  GOOGLE SHEETS      │   │  GOOGLE CALENDAR     │
│  ───────────────    │   │  ─────────────────   │
│  • Name             │   │  • Event Title       │
│  • Phone            │   │  • Date/Time         │
│  • Email            │   │  • Description       │
│  • Reason           │   │  • Attendees         │
│  • Appt Date        │   │  • Reminders         │
│  • Appt Time        │   └──────────────────────┘
│  • Timestamp        │
└─────────────────────┘

DATA FLOW:
1. Call received → n8n webhook triggered
2. Audio stream → Speech-to-Text
3. Text → AI reasoning (with system prompt)
4. AI response → Text-to-Speech
5. Audio → Back to caller
6. Repeat until appointment confirmed or call ends
7. Structured data → Sheets + Calendar
8. Confirmation message → Caller
`}</pre>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-bold text-white mb-3">Key Architecture Decisions</h3>
        <div className="space-y-3">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-blue-300 mb-2">🔄 Stateful Conversation Loop</h4>
            <p className="text-sm">Each call maintains conversation context across multiple turns. State persists in n8n workflow memory.</p>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-purple-300 mb-2">🎯 Intent-Based Routing</h4>
            <p className="text-sm">AI classifies caller intent (booking, inquiry, complaint) and routes to appropriate sub-workflows.</p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-green-300 mb-2">⚡ Parallel Execution</h4>
            <p className="text-sm">Calendar creation and spreadsheet logging happen simultaneously to minimize latency.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function WorkflowTab() {
  return (
    <div className="space-y-6 text-gray-200">
      <h2 className="text-2xl font-bold text-white mb-4">Call Flow Step-by-Step</h2>

      <div className="space-y-4">
        {[
          {
            step: 1,
            title: "Call Initiation",
            description: "Caller dials business number → VoIP system receives → Webhook triggers n8n",
            details: ["Call SID generated", "Audio stream established", "Session initialized"]
          },
          {
            step: 2,
            title: "AI Greeting",
            description: "AI immediately answers with warm, professional greeting",
            details: [
              "\"Hi there! Thank you for calling [Business Name]. I'm Sarah, how can I help you today?\"",
              "Voice: Natural, friendly, confident",
              "Tone: Professional but approachable"
            ]
          },
          {
            step: 3,
            title: "Caller Intent Detection",
            description: "AI listens and classifies intent",
            details: [
              "Booking appointment → Continue",
              "General inquiry → Provide info + guide to booking",
              "Complaint → Empathize + guide to booking or callback"
            ]
          },
          {
            step: 4,
            title: "Information Collection",
            description: "AI collects required fields conversationally",
            details: [
              "\"What's your name?\" → Store name",
              "\"And the best number to reach you?\" → Store phone",
              "\"Email address?\" → Store email",
              "\"What brings you in?\" → Store reason",
              "\"When would work best for you?\" → Store preferred date/time"
            ]
          },
          {
            step: 5,
            title: "Availability Check",
            description: "n8n queries Google Calendar API in real-time",
            details: [
              "Search for available slots on requested date",
              "Check for conflicts",
              "If available → Proceed to booking",
              "If unavailable → Offer 2-3 nearest alternatives"
            ]
          },
          {
            step: 6,
            title: "Appointment Confirmation",
            description: "AI confirms booking details with caller",
            details: [
              "\"Perfect! I have you down for [Date] at [Time].\"",
              "\"You'll receive a confirmation email at [Email].\"",
              "\"Is there anything else I can help with today?\""
            ]
          },
          {
            step: 7,
            title: "Data Persistence",
            description: "n8n writes to integrations in parallel",
            details: [
              "Google Sheets: Append new row with all caller data",
              "Google Calendar: Create event with title, time, description",
              "Both operations happen simultaneously"
            ]
          },
          {
            step: 8,
            title: "Call Closure",
            description: "AI ends call professionally",
            details: [
              "\"Great! We look forward to seeing you. Have a wonderful day!\"",
              "Call metrics logged",
              "Session terminated gracefully"
            ]
          }
        ].map((item) => (
          <div key={item.step} className="bg-white/5 border border-white/10 rounded-lg p-5">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold">
                  {item.step}
                </div>
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300 mb-3">{item.description}</p>
                <ul className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SetupTab() {
  return (
    <div className="space-y-6 text-gray-200">
      <h2 className="text-2xl font-bold text-white mb-4">Implementation Guide</h2>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">📞 Step 1: Phone System Setup</h3>
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <h4 className="font-semibold mb-2">Option A: Twilio (Recommended)</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Create Twilio account → twilio.com</li>
            <li>Purchase a phone number ($1/month)</li>
            <li>Configure webhook URL: <code className="bg-black/50 px-2 py-1 rounded">https://your-n8n-instance.com/webhook/inbound-call</code></li>
            <li>Enable Voice Streams for bidirectional audio</li>
            <li>Copy Account SID and Auth Token</li>
          </ol>

          <h4 className="font-semibold mb-2 mt-4">Option B: Vonage</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Create Vonage account → vonage.com</li>
            <li>Set up Voice API application</li>
            <li>Configure answer URL and event URL</li>
            <li>Copy API key and secret</li>
          </ol>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">🔧 Step 2: n8n Installation</h3>
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <p className="mb-3 text-sm">Deploy n8n on a server that runs 24/7 (DigitalOcean, AWS, or local server)</p>
          <pre className="bg-black/50 p-3 rounded text-xs overflow-x-auto">
{`# Using Docker (recommended)
docker run -it --rm \\
  --name n8n \\
  -p 5678:5678 \\
  -v ~/.n8n:/home/node/.n8n \\
  n8nio/n8n

# Or using npm
npm install n8n -g
n8n start

# Access: http://localhost:5678`}
          </pre>
          <p className="mt-3 text-sm text-yellow-300">⚠️ For production: Use reverse proxy (nginx) with SSL certificate</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">🤖 Step 3: AI Voice Services</h3>
        <div className="bg-black/30 rounded-lg p-4 border border-white/10 space-y-3">
          <div>
            <h4 className="font-semibold mb-1">Speech-to-Text</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Deepgram:</strong> Best latency, $0.0043/min (recommended)</li>
              <li>• <strong>AssemblyAI:</strong> Great accuracy, $0.00025/sec</li>
              <li>• <strong>Google Cloud:</strong> Reliable, $0.006/15sec</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1">AI Reasoning</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>OpenAI GPT-4:</strong> Best conversation quality</li>
              <li>• <strong>Anthropic Claude:</strong> Better instruction following</li>
              <li>• <strong>GPT-3.5 Turbo:</strong> Cost-effective alternative</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1">Text-to-Speech</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>ElevenLabs:</strong> Most natural voices (recommended)</li>
              <li>• <strong>PlayHT:</strong> Good quality, competitive pricing</li>
              <li>• <strong>Google Cloud TTS:</strong> Budget option</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">📊 Step 4: Google Integrations</h3>
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <h4 className="font-semibold mb-2">Google Sheets Setup</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm mb-4">
            <li>Create new Google Sheet</li>
            <li>Add headers: Name | Phone | Email | Reason | Appt Date | Appt Time | Timestamp</li>
            <li>Share with service account email</li>
            <li>Copy Sheet ID from URL</li>
          </ol>

          <h4 className="font-semibold mb-2">Google Calendar Setup</h4>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Create service account in Google Cloud Console</li>
            <li>Enable Google Sheets API and Google Calendar API</li>
            <li>Download JSON credentials file</li>
            <li>Share calendar with service account email</li>
            <li>Copy Calendar ID</li>
          </ol>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">⚙️ Step 5: n8n Workflow Configuration</h3>
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <p className="text-sm mb-3">Import the n8n workflow JSON (see documentation tab) or build manually:</p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Create new workflow in n8n</li>
            <li>Add Webhook trigger node (configure for POST requests)</li>
            <li>Add HTTP Request nodes for STT, AI, TTS services</li>
            <li>Add Google Sheets node (append operation)</li>
            <li>Add Google Calendar node (create event operation)</li>
            <li>Configure credentials for each service</li>
            <li>Set up error handling and retry logic</li>
            <li>Activate workflow</li>
          </ol>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-white mb-3">🧪 Step 6: Testing</h3>
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Call the Twilio number</li>
            <li>Verify AI answers immediately</li>
            <li>Test full conversation flow</li>
            <li>Confirm data appears in Google Sheets</li>
            <li>Check Google Calendar event created</li>
            <li>Test edge cases (unavailable slots, unclear responses)</li>
            <li>Monitor n8n execution logs</li>
          </ol>
        </div>
      </section>

      <section className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
        <h3 className="text-xl font-semibold text-green-300 mb-2">🚀 Ready for Production</h3>
        <p className="text-sm">
          Once testing is complete, your AI receptionist is ready to handle real customer calls.
          Monitor performance, collect feedback, and iterate on the system prompt for better results.
        </p>
      </section>
    </div>
  )
}

function SystemPromptSection() {
  return (
    <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-lg rounded-lg border border-purple-500/30 p-6 mb-8">
      <div className="flex items-center mb-4">
        <Workflow className="h-6 w-6 text-purple-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">AI System Prompt (Production Version)</h2>
      </div>

      <div className="bg-black/40 rounded-lg p-5 border border-white/10 text-gray-200 overflow-x-auto">
        <pre className="text-sm whitespace-pre-wrap font-mono">{`ROLE:
You are Sarah, the professional receptionist for [BUSINESS_NAME]. You are warm, confident, and helpful. You sound completely human - not like a chatbot or AI.

VOICE & TONE:
- Use short, natural sentences
- Speak warmly and professionally
- Include natural pauses
- Never sound robotic or verbose
- One question at a time
- Confirm details when needed

OBJECTIVES:
1. Answer calls immediately and professionally
2. Make callers feel welcomed and heard
3. Collect required information naturally
4. Guide callers toward booking appointments
5. Handle objections confidently
6. Confirm appointments clearly

CONVERSATION FLOW:

1. GREETING (Immediate, warm)
"Hi there! Thank you for calling [BUSINESS_NAME]. I'm Sarah, how can I help you today?"

2. LISTEN & CLASSIFY
- Booking intent → Continue to collection
- General inquiry → Briefly answer, then guide to booking
- Pricing question → "Our pricing depends on your specific needs. Let's get you scheduled for a consultation to discuss that."
- Complaint/issue → Empathize, then offer callback or appointment

3. INFORMATION COLLECTION (Natural, conversational)
Required fields:
- Full name: "Perfect! And what's your name?"
- Phone: "And the best number to reach you at?"
- Email: "Great, and your email address?"
- Reason: "What brings you in today?" or "What can we help you with?"
- Preferred date: "When would work best for you?"
- Preferred time: "And what time of day works better - morning or afternoon?"

4. AVAILABILITY CHECK
- Check calendar for requested slot
- If available: "Perfect! I have [Date] at [Time] available."
- If unavailable: "That time is already booked. I have [Alternative 1] or [Alternative 2] available. Which works better?"

5. CONFIRMATION
"Excellent! You're all set for [Day], [Date] at [Time]. You'll receive a confirmation email at [Email]. Is there anything else I can help with today?"

6. CLOSING
"Wonderful! We look forward to seeing you. Have a great day!"

HANDLING OBJECTIONS:

Pricing concerns:
"I completely understand. Our pricing varies based on what you need. The best way is to schedule a quick consultation - there's no obligation, and you'll get exact pricing for your situation."

"Just looking for info":
"Of course! I'd be happy to help. [Brief answer]. You know what, the best way to get detailed information specific to your needs is to schedule a quick call with our team. Would [Date/Time] work?"

"I'll call back":
"No problem at all! Just so you have options, I have [Date] at [Time] available if you'd like to lock that in now. Otherwise, feel free to call back anytime."

Not ready to commit:
"I totally get it. No pressure at all. How about we pencil something in - you can always reschedule if things change. Would [Date] work?"

RULES:
- NEVER sound pushy or salesy
- ALWAYS be helpful and understanding
- NEVER make up information you don't have
- If you don't know something: "That's a great question. Let me have someone call you back with that information. Can I grab your number?"
- NEVER argue with callers
- If caller is upset: Empathize first, solve second
- Frame appointments as helpful next steps, not obligations
- Assume booking intent unless caller explicitly declines

DATA EXTRACTION:
After call completion, extract this JSON:
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "reason": "string",
  "appointment_date": "YYYY-MM-DD",
  "appointment_time": "HH:MM",
  "call_outcome": "booked|callback|declined|info_only",
  "notes": "string"
}

ERROR HANDLING:
- If caller is unclear: "Sorry, I didn't quite catch that. Could you say that again?"
- If multiple attempts fail: "No worries! Let me have someone call you back at a better time. What's your number?"
- If technical issues: "I apologize, we're having a brief technical issue. Can I take your number and have someone call you right back?"

Remember: You're not just answering calls - you're representing the business professionally and helping callers solve their problems. Be helpful, confident, and natural.`}</pre>
      </div>

      <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
        <p className="text-sm text-yellow-200">
          <strong>⚠️ Customization Required:</strong> Replace [BUSINESS_NAME] with actual business name.
          Adjust service descriptions, pricing handling, and appointment types based on specific business needs.
        </p>
      </div>
    </div>
  )
}

function IntegrationsSection() {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Data Schemas & Integration Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-black/30 rounded-lg p-5 border border-white/10">
          <div className="flex items-center mb-3">
            <FileSpreadsheet className="h-5 w-5 text-green-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Google Sheets Schema</h3>
          </div>
          <pre className="text-xs bg-black/50 p-3 rounded overflow-x-auto text-gray-300">{`{
  "spreadsheetId": "YOUR_SHEET_ID",
  "range": "Sheet1!A:H",
  "values": [
    [
      "Full Name",
      "Phone Number",
      "Email Address",
      "Reason for Call",
      "Appointment Date",
      "Appointment Time",
      "Call Timestamp",
      "Status"
    ],
    [
      "John Smith",
      "+1-555-123-4567",
      "john@example.com",
      "Annual checkup",
      "2026-01-25",
      "14:00",
      "2026-01-17 10:23:45",
      "Confirmed"
    ]
  ]
}`}</pre>
        </div>

        <div className="bg-black/30 rounded-lg p-5 border border-white/10">
          <div className="flex items-center mb-3">
            <Calendar className="h-5 w-5 text-blue-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Google Calendar Schema</h3>
          </div>
          <pre className="text-xs bg-black/50 p-3 rounded overflow-x-auto text-gray-300">{`{
  "calendarId": "YOUR_CALENDAR_ID",
  "event": {
    "summary": "Appointment - John Smith",
    "description": "Reason: Annual checkup\\n
      Phone: +1-555-123-4567\\n
      Email: john@example.com",
    "start": {
      "dateTime": "2026-01-25T14:00:00",
      "timeZone": "America/New_York"
    },
    "end": {
      "dateTime": "2026-01-25T15:00:00",
      "timeZone": "America/New_York"
    },
    "attendees": [
      {"email": "john@example.com"}
    ],
    "reminders": {
      "useDefault": false,
      "overrides": [
        {"method": "email", "minutes": 1440},
        {"method": "popup", "minutes": 30}
      ]
    }
  }
}`}</pre>
        </div>

        <div className="bg-black/30 rounded-lg p-5 border border-white/10">
          <div className="flex items-center mb-3">
            <Phone className="h-5 w-5 text-purple-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Twilio Webhook Payload</h3>
          </div>
          <pre className="text-xs bg-black/50 p-3 rounded overflow-x-auto text-gray-300">{`{
  "CallSid": "CA1234567890abcdef",
  "From": "+15551234567",
  "To": "+15559876543",
  "CallStatus": "ringing",
  "Direction": "inbound",
  "AccountSid": "AC1234567890abcdef",
  "StreamSid": "MZ1234567890abcdef"
}

Response (TwiML):
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Connect>
    <Stream url="wss://your-n8n.com/stream" />
  </Connect>
</Response>`}</pre>
        </div>

        <div className="bg-black/30 rounded-lg p-5 border border-white/10">
          <div className="flex items-center mb-3">
            <Settings className="h-5 w-5 text-orange-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">n8n Workflow Variables</h3>
          </div>
          <pre className="text-xs bg-black/50 p-3 rounded overflow-x-auto text-gray-300">{`{
  "credentials": {
    "twilioAccountSid": "env:TWILIO_SID",
    "twilioAuthToken": "env:TWILIO_TOKEN",
    "openaiApiKey": "env:OPENAI_KEY",
    "elevenlabsApiKey": "env:ELEVEN_KEY",
    "deepgramApiKey": "env:DEEPGRAM_KEY",
    "googleServiceAccount": "env:GOOGLE_CREDS"
  },
  "config": {
    "businessName": "Your Business",
    "calendarId": "primary",
    "spreadsheetId": "YOUR_SHEET_ID",
    "timezone": "America/New_York",
    "defaultApptDuration": 60,
    "voiceModel": "eleven_turbo_v2"
  }
}`}</pre>
        </div>
      </div>

      <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-blue-300 mb-2">🔐 Security Best Practices</h3>
        <ul className="text-sm text-gray-200 space-y-1">
          <li>• Store all API keys in environment variables, never in workflow JSON</li>
          <li>• Use webhook authentication (validate Twilio signatures)</li>
          <li>• Enable SSL/TLS for all external communications</li>
          <li>• Restrict Google service account permissions to minimum required</li>
          <li>• Implement rate limiting on webhook endpoints</li>
          <li>• Log all calls but redact sensitive PII in logs</li>
          <li>• Regular security audits of n8n instance and dependencies</li>
        </ul>
      </div>

      <div className="mt-6 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-purple-300 mb-2">📈 Scaling for Multiple Clients</h3>
        <ul className="text-sm text-gray-200 space-y-1">
          <li>• Create separate n8n workflow for each client (or use dynamic routing)</li>
          <li>• Store client configurations in database (business name, calendar ID, sheet ID)</li>
          <li>• Use Twilio subaccounts for client phone number isolation</li>
          <li>• Implement usage tracking and billing per client</li>
          <li>• White-label dashboard for client self-service</li>
          <li>• Monitor call quality metrics per client</li>
          <li>• Automated onboarding workflow for new clients</li>
        </ul>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4">
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  )
}
