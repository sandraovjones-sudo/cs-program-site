"use client";

import { useState } from "react";
import { CheckCircle, Circle, Calendar, Target, TrendingUp, FileText, Users, BarChart3 } from "lucide-react";

export default function CSProgramDashboard() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

const toggleDay = (day: number) => {
    setCompletedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };
  const weeks = [
    {
      week: 1,
      theme: "Account Planning & Onboarding",
      focus: "Portfolio Assessment, Success Planning, Stakeholder Mapping",
      days: [
        {
          day: 1,
          title: "Portfolio Analysis & Prioritisation",
          time: "90 min",
          tasks: [
            "Analyse TechCo's 15-account portfolio (5 Enterprise, 7 Mid-Market, 3 SMB)",
            "Create account prioritisation matrix using ARR, health score, growth potential, strategic value",
            "Identify top 5 accounts requiring immediate attention"
          ],
          deliverable: "Account Prioritisation Matrix (Excel/Google Sheets)",
          tools: ["Excel", "HubSpot"],
          aiUse: "Use ChatGPT to generate prioritisation framework criteria"
        },
        {
          day: 2,
          title: "90-Day Success Plan - Enterprise Account",
          time: "2 hours",
          tasks: [
            "Select highest-priority enterprise account ($500K ARR)",
            "Draft 30-60-90 day success plan with milestones and success metrics",
            "Define business outcomes, adoption goals, and executive touchpoints"
          ],
          deliverable: "Customer Success Plan Document",
          tools: ["Google Docs", "Notion"],
          aiUse: "Generate success plan template and milestone recommendations"
        },
        {
          day: 3,
          title: "Stakeholder Mapping",
          time: "90 min",
          tasks: [
            "Create stakeholder map for 3 key enterprise accounts",
            "Identify decision-makers, champions, influencers, and blockers",
            "Document engagement strategy for each stakeholder type"
          ],
          deliverable: "Stakeholder Map (Miro/Lucidchart)",
          tools: ["Miro", "Lucidchart"],
          aiUse: "Use AI to suggest engagement tactics per stakeholder role"
        },
        {
          day: 4,
          title: "Health Score Model Design",
          time: "2 hours",
          tasks: [
            "Design multi-factor health score model (usage, engagement, sentiment, business outcomes)",
            "Weight criteria: Product adoption 30%, Support tickets 20%, Executive engagement 25%, Payment history 15%, NPS 10%",
            "Apply to entire portfolio and categorise: Green (80-100), Yellow (60-79), Red (<60)"
          ],
          deliverable: "Health Score Dashboard",
          tools: ["Excel", "Tableau"],
          aiUse: "Automate health score calculations using formulas"
        },
        {
          day: 5,
          title: "Risk Assessment & Mitigation Planning",
          time: "90 min",
          tasks: [
            "Identify 3 at-risk accounts (health score <60)",
            "Document risk factors for each account",
            "Create initial mitigation strategy outline"
          ],
          deliverable: "Risk Assessment Report",
          tools: ["Google Docs"],
          aiUse: "Generate risk mitigation playbook structure"
        },
        {
          day: 6,
          title: "Customer Journey Mapping",
          time: "2 hours",
          tasks: [
            "Map complete customer lifecycle: Onboarding → Adoption → Value Realization → Renewal → Expansion",
            "Identify key touchpoints, pain points, and moments of truth",
            "Define CS team responsibilities at each stage"
          ],
          deliverable: "Customer Journey Map",
          tools: ["Miro", "Figma"],
          aiUse: "Research best practice journey mapping frameworks"
        },
        {
          day: 7,
          title: "Week 1 Portfolio Review",
          time: "90 min",
          tasks: [
            "Compile all Week 1 deliverables into portfolio folder",
            "Write LinkedIn reflection post on key learnings",
            "Self-assessment using provided rubric"
          ],
          deliverable: "Portfolio Package + LinkedIn Post",
          tools: ["LinkedIn", "Portfolio folder"],
          aiUse: "Draft LinkedIn post highlighting insights"
        }
      ]
    },
    {
      week: 2,
      theme: "Lifecycle Management & Forecasting",
      focus: "Renewal Forecasting, Risk Mitigation, Expansion Planning",
      days: [
        {
          day: 8,
          title: "Renewal Forecast Model",
          time: "2 hours",
          tasks: [
            "Build renewal forecast model for next quarter",
            "Calculate renewal rate, churn risk, expansion opportunity",
            "Categorize accounts: Secure (90%+), At Risk (60-89%), High Risk (<60%)"
          ],
          deliverable: "Renewal Forecast Spreadsheet",
          tools: ["Excel", "Google Sheets"],
          aiUse: "Use AI to predict churn probability based on engagement data"
        },
        {
          day: 9,
          title: "At-Risk Account Recovery Playbook",
          time: "90 min",
          tasks: [
            "Create playbook for recovering at-risk accounts",
            "Define triggers, escalation paths, recovery tactics",
            "Include email templates and executive engagement scripts"
          ],
          deliverable: "Recovery Playbook Document",
          tools: ["Google Docs", "Notion"],
          aiUse: "Generate recovery email templates"
        },
        {
          day: 10,
          title: "Simulated Account Save - Red Account",
          time: "2 hours",
          tasks: [
            "Select one red-health account with renewal in 60 days",
            "Draft comprehensive save plan with stakeholder engagement strategy",
            "Create executive escalation email and meeting agenda"
          ],
          deliverable: "Account Save Plan + Executive Email",
          tools: ["Google Docs"],
          aiUse: "Refine executive communication tone and messaging"
        },
        {
          day: 11,
          title: "Expansion Opportunity Analysis",
          time: "90 min",
          tasks: [
            "Identify 5 accounts with expansion potential",
            "Analyze usage patterns suggesting need for additional licenses/features",
            "Document expansion signals and next steps"
          ],
          deliverable: "Expansion Opportunity Report",
          tools: ["Excel", "HubSpot"],
          aiUse: "Analyze usage data to identify expansion triggers"
        },
        {
          day: 12,
          title: "Upsell Business Case",
          time: "2 hours",
          tasks: [
            "Select one expansion opportunity and build business case",
            "Calculate ROI, payback period, and business impact",
            "Create one-page proposal for customer stakeholders"
          ],
          deliverable: "Upsell Business Case One-Pager",
          tools: ["PowerPoint", "Google Slides"],
          aiUse: "Generate ROI calculation framework"
        },
        {
          day: 13,
          title: "Cross-Functional Alignment Simulation",
          time: "90 min",
          tasks: [
            "Draft mock meeting agenda for Sales/CS alignment on expansion accounts",
            "Create RACI matrix for renewal and expansion processes",
            "Document handoff protocol between Sales and CS"
          ],
          deliverable: "Alignment Framework Document",
          tools: ["Google Docs"],
          aiUse: "Research best practice RACI models for CS teams"
        },
        {
          day: 14,
          title: "Week 2 Review & Forecasting Presentation",
          time: "2 hours",
          tasks: [
            "Compile renewal forecast and expansion pipeline",
            "Create executive summary presentation",
            "Post LinkedIn update on forecasting insights"
          ],
          deliverable: "Forecast Presentation + LinkedIn Post",
          tools: ["PowerPoint", "LinkedIn"],
          aiUse: "Polish presentation design and messaging"
        }
      ]
    },
    {
      week: 3,
      theme: "Executive Communication & QBRs",
      focus: "Business Reviews, Value Realization, Strategic Alignment",
      days: [
        {
          day: 15,
          title: "QBR Template Design",
          time: "2 hours",
          tasks: [
            "Design comprehensive QBR template with sections: Executive Summary, Business Outcomes, Product Adoption, ROI Analysis, Strategic Roadmap",
            "Include data visualization best practices",
            "Create presenter notes and facilitation guide"
          ],
          deliverable: "QBR Template Deck (PowerPoint)",
          tools: ["PowerPoint", "Google Slides"],
          aiUse: "Research QBR best practices and generate template structure"
        },
        {
          day: 16,
          title: "Value Realization Case Study",
          time: "90 min",
          tasks: [
            "Select one high-performing account",
            "Document business challenge, solution implemented, measurable outcomes",
            "Quantify ROI and business impact (time saved, revenue generated, cost reduction)"
          ],
          deliverable: "Customer Success Story One-Pager",
          tools: ["Google Docs", "Canva"],
          aiUse: "Help structure narrative and calculate ROI metrics"
        },
        {
          day: 17,
          title: "Mock QBR - Healthy Account",
          time: "2 hours",
          tasks: [
            "Prepare complete QBR for green-health enterprise account",
            "Include: adoption metrics, business outcomes achieved, expansion opportunities",
            "Practice presentation delivery (record yourself)"
          ],
          deliverable: "Complete QBR Deck + Presentation Recording",
          tools: ["PowerPoint", "Loom"],
          aiUse: "Generate speaking notes and transition phrases"
        },
        {
          day: 18,
          title: "Executive Email - Addressing Concerns",
          time: "90 min",
          tasks: [
            "Simulate scenario: Executive stakeholder expresses dissatisfaction with product",
            "Draft empathetic, solution-oriented response email",
            "Include action plan and accountability commitments"
          ],
          deliverable: "Executive Communication Email",
          tools: ["Google Docs"],
          aiUse: "Refine tone, structure, and solution framing"
        },
        {
          day: 19,
          title: "Mock QBR - At-Risk Account",
          time: "2 hours",
          tasks: [
            "Prepare challenging QBR for yellow/red health account",
            "Acknowledge gaps, present turnaround plan, rebuild confidence",
            "Include recovery timeline and success metrics"
          ],
          deliverable: "Turnaround QBR Deck",
          tools: ["PowerPoint"],
          aiUse: "Develop recovery messaging framework"
        },
        {
          day: 20,
          title: "Product Roadmap Advocacy",
          time: "90 min",
          tasks: [
            "Compile top 5 customer feature requests based on portfolio feedback",
            "Create business case for Product team showing impact and urgency",
            "Draft customer advocacy brief with revenue at risk if not addressed"
          ],
          deliverable: "Product Advocacy Brief",
          tools: ["Google Docs"],
          aiUse: "Prioritize feature requests by business impact"
        },
        {
          day: 21,
          title: "Week 3 Review & Presentation Practice",
          time: "2 hours",
          tasks: [
            "Present QBRs to peer group or record for self-review",
            "Gather feedback on presentation skills and content",
            "Post LinkedIn update on executive communication insights"
          ],
          deliverable: "Presentation Feedback Summary + LinkedIn Post",
          tools: ["Loom", "LinkedIn"],
          aiUse: "Analyze presentation for improvement areas"
        }
      ]
    },
    {
      week: 4,
      theme: "Portfolio Showcase & Strategic Reflection",
      focus: "Portfolio Finalization, Thought Leadership, Program Completion",
      days: [
        {
          day: 22,
          title: "Portfolio Artifact Refinement",
          time: "2 hours",
          tasks: [
            "Review and polish all deliverables from Weeks 1-3",
            "Ensure consistency in branding, formatting, quality",
            "Create portfolio index with descriptions"
          ],
          deliverable: "Refined Portfolio Package",
          tools: ["Portfolio folder"],
          aiUse: "Get feedback on portfolio presentation"
        },
        {
          day: 23,
          title: "CS Metrics Dashboard",
          time: "2 hours",
          tasks: [
            "Build comprehensive metrics dashboard tracking: NRR, GRR, Logo Retention, Time-to-Value, NPS, Health Score Distribution, Expansion Rate",
            "Use simulated portfolio data",
            "Create executive-ready visualizations"
          ],
          deliverable: "CS Metrics Dashboard",
          tools: ["Tableau", "Excel", "Google Sheets"],
          aiUse: "Generate data visualization recommendations"
        },
        {
          day: 24,
          title: "CS Playbook Compilation",
          time: "90 min",
          tasks: [
            "Compile all playbooks created: Onboarding, Risk Mitigation, Expansion, QBR",
            "Add executive summary and table of contents",
            "Format as professional reference guide"
          ],
          deliverable: "Complete CS Playbook Guide",
          tools: ["Google Docs", "Notion"],
          aiUse: "Structure playbook organization and indexing"
        },
        {
          day: 25,
          title: "Strategic Reflection Document",
          time: "2 hours",
          tasks: [
            "Write comprehensive reflection: What worked, what didn't, key learnings",
            "Document how simulation applies to real CS leadership",
            "Identify skills developed and areas for continued growth"
          ],
          deliverable: "Strategic Reflection Paper",
          tools: ["Google Docs"],
          aiUse: "Help articulate insights and connect to leadership competencies"
        },
        {
          day: 26,
          title: "LinkedIn Thought Leadership Series - Part 1",
          time: "90 min",
          tasks: [
            "Write LinkedIn article on customer health scoring best practices",
            "Include insights from your simulation experience",
            "Add relevant portfolio examples"
          ],
          deliverable: "LinkedIn Article",
          tools: ["LinkedIn"],
          aiUse: "Optimize for engagement and thought leadership positioning"
        },
        {
          day: 27,
          title: "LinkedIn Thought Leadership Series - Part 2",
          time: "90 min",
          tasks: [
            "Write LinkedIn article on renewal forecasting and risk management",
            "Share frameworks and templates developed",
            "Position yourself as CS strategy expert"
          ],
          deliverable: "LinkedIn Article",
          tools: ["LinkedIn"],
          aiUse: "Enhance storytelling and professional positioning"
        },
        {
          day: 28,
          title: "Portfolio Presentation Deck",
          time: "2 hours",
          tasks: [
            "Create 15-minute portfolio presentation for CS leaders",
            "Highlight: simulation overview, key deliverables, measurable outcomes, skills demonstrated",
            "Include compelling visuals and data points"
          ],
          deliverable: "Portfolio Presentation Deck",
          tools: ["PowerPoint", "Google Slides"],
          aiUse: "Refine presentation flow and impact"
        },
        {
          day: 29,
          title: "Portfolio Review Sessions",
          time: "2 hours",
          tasks: [
            "Present portfolio to 2-3 CS leaders (schedule 30-min sessions)",
            "Request specific feedback on content, presentation, hirability",
            "Document feedback for future improvements"
          ],
          deliverable: "Feedback Summary Report",
          tools: ["Zoom", "Google Meet"],
          aiUse: "Prepare presentation talking points"
        },
        {
          day: 30,
          title: "Program Completion & Next Steps",
          time: "90 min",
          tasks: [
            "Finalize all portfolio materials in shareable format",
            "Update LinkedIn profile with program completion and key achievements",
            "Create action plan for applying learnings to job search/consulting practice",
            "Celebrate completion!"
          ],
          deliverable: "Final Portfolio Package + Updated LinkedIn Profile",
          tools: ["LinkedIn", "Portfolio folder"],
          aiUse: "Optimize LinkedIn profile for CS leadership positioning"
        }
      ]
    }
  ];

  const currentWeek = weeks.find(w => w.week === activeWeek);
  const totalDays = 30;
  const completionRate = Math.round((completedDays.length / totalDays) * 100);
   
  if (!currentWeek) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Success Leadership Simulation</h1>
              <p className="text-gray-600">TechCo B2B SaaS Platform - 30-Day Intensive Program</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-indigo-600">{completionRate}%</div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
          
          {/* Progress Stats */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">Days Complete</span>
              </div>
              <div className="text-2xl font-bold text-indigo-600">{completedDays.length}/30</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Deliverables</span>
              </div>
              <div className="text-2xl font-bold text-green-600">{completedDays.length}</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Current Streak</span>
              </div>
              <div className="text-2xl font-bold text-purple-600">{completedDays.length > 0 ? '🔥' : '-'}</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-gray-700">Portfolio Size</span>
              </div>
              <div className="text-2xl font-bold text-orange-600">15 Accounts</div>
            </div>
          </div>
        </div>

        {/* Week Navigation */}
        <div className="flex gap-2 mb-6">
          {weeks.map(week => (
            <button
              key={week.week}
              onClick={() => setActiveWeek(week.week)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                activeWeek === week.week
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Week {week.week}
            </button>
          ))}
        </div>

        {/* Week Details */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentWeek.theme}</h2>
            <p className="text-gray-600">{currentWeek.focus}</p>
          </div>

          {/* Days */}
          <div className="space-y-4">
            {currentWeek.days.map(dayInfo => (
              <div
                key={dayInfo.day}
                className={`border rounded-lg p-6 transition-all ${
                  completedDays.includes(dayInfo.day)
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleDay(dayInfo.day)}
                      className="mt-1"
                    >
                      {completedDays.includes(dayInfo.day) ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400" />
                      )}
                    </button>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Day {dayInfo.day}: {dayInfo.title}</h3>
                      <p className="text-sm text-gray-600">⏱️ {dayInfo.time}</p>
                    </div>
                  </div>
                </div>

                <div className="ml-9 space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Tasks:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {dayInfo.tasks.map((task, idx) => (
                        <li key={idx} className="text-sm">{task}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    <span className="font-semibold text-sm text-gray-700">Deliverable:</span>
                    <span className="text-sm text-indigo-600">{dayInfo.deliverable}</span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                    <span className="font-semibold text-sm text-gray-700">Tools:</span>
                    {dayInfo.tools.map((tool, idx) => (
                      <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <span className="font-semibold text-sm text-blue-900">🤖 AI Integration: </span>
                    <span className="text-sm text-blue-800">{dayInfo.aiUse}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Success Metrics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <div className="font-semibold text-gray-900">Completion Rate</div>
              <div className="text-sm text-gray-600">Target: 30/30 days (100% consistency)</div>
              <div className="text-sm font-medium text-indigo-600">Current: {completedDays.length}/30 days</div>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <div className="font-semibold text-gray-900">Portfolio Artifacts</div>
              <div className="text-sm text-gray-600">Target: 30+ deliverables</div>
              <div className="text-sm font-medium text-green-600">Current: {completedDays.length} artifacts</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="font-semibold text-gray-900">Customer Saves</div>
              <div className="text-sm text-gray-600">Target: 3 simulated recoveries</div>
              <div className="text-sm font-medium text-purple-600">Track in Weeks 2-3</div>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="font-semibold text-gray-900">Expert Feedback</div>
              <div className="text-sm text-gray-600">Target: 2-3 CS leader reviews</div>
              <div className="text-sm font-medium text-orange-600">Schedule for Day 29</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
