import { motion, useScroll, useTransform } from "motion/react";
import { LogoIcon } from "./components/LogoIcon";
import {
  AlertTriangle,
  Users,
  Building2,
  Shield,
  CheckCircle2,
  ArrowRight,
  Scale,
  Eye,
  BookOpen,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <LogoIcon className="w-8 h-8 sm:w-10 sm:h-10" variant="full-color" />
            <span
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "#1E293B",
              }}
              className="sm:text-xl"
            >
              FairHire Alliance
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#problem"
              style={{
                fontSize: "0.9375rem",
                color: "#64748B",
                fontWeight: 500,
              }}
            >
              The Problem
            </a>
            <a
              href="#solution"
              style={{
                fontSize: "0.9375rem",
                color: "#64748B",
                fontWeight: 500,
              }}
            >
              Our Solution
            </a>
            <a
              href="#how-it-works"
              style={{
                fontSize: "0.9375rem",
                color: "#64748B",
                fontWeight: 500,
              }}
            >
              How It Works
            </a>
            <button
              className="px-5 py-2.5 bg-blue-900 text-white rounded-lg flex items-center gap-2"
              style={{
                fontSize: "0.9375rem",
                fontWeight: 600,
              }}
            >
              Get Certified
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-900" />
            ) : (
              <Menu className="w-6 h-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-4 py-4 space-y-4">
              <a
                href="#problem"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2"
                style={{
                  fontSize: "1rem",
                  color: "#64748B",
                  fontWeight: 500,
                }}
              >
                The Problem
              </a>
              <a
                href="#solution"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2"
                style={{
                  fontSize: "1rem",
                  color: "#64748B",
                  fontWeight: 500,
                }}
              >
                Our Solution
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2"
                style={{
                  fontSize: "1rem",
                  color: "#64748B",
                  fontWeight: 500,
                }}
              >
                How It Works
              </a>
              <button
                className="w-full px-5 py-3 bg-blue-900 text-white rounded-lg flex items-center justify-center gap-2"
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                }}
              >
                Get Certified
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-6 sm:gap-8"
          >
            <LogoIcon className="w-24 h-24 sm:w-32 sm:h-32" variant="full-color" />

            <div className="space-y-3 sm:space-y-4">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{
                  fontWeight: 700,
                  color: "#0F172A",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                FairHire Alliance
              </h1>
              <p
                className="max-w-3xl px-4 text-xl sm:text-2xl md:text-3xl"
                style={{
                  color: "#475569",
                  lineHeight: 1.5,
                }}
              >
                Ensuring Fair and Transparent AI Hiring
              </p>
            </div>

            <p
              className="max-w-2xl px-4 text-base sm:text-lg md:text-xl"
              style={{
                color: "#64748B",
                lineHeight: 1.7,
              }}
            >
              An independent certification body bridging the gap between
              candidates and companies to provide trustworthy hiring practices
              rooted in fairness, transparency, and accountability.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 w-full sm:w-auto px-4">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-900 text-white rounded-lg flex items-center justify-center gap-2 text-base sm:text-lg"
                style={{
                  fontWeight: 600,
                }}
              >
                Learn More
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-900 text-blue-900 rounded-lg text-base sm:text-lg"
                style={{
                  fontWeight: 600,
                }}
              >
                For Students
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-slate-200 w-full max-w-2xl">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 text-blue-900" />
                <span
                  className="text-sm sm:text-base"
                  style={{
                    color: "#64748B",
                    fontWeight: 500,
                  }}
                >
                  Fair Assessment
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-900" />
                <span
                  className="text-sm sm:text-base"
                  style={{
                    color: "#64748B",
                    fontWeight: 500,
                  }}
                >
                  Full Transparency
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-900" />
                <span
                  className="text-sm sm:text-base"
                  style={{
                    color: "#64748B",
                    fontWeight: 500,
                  }}
                >
                  Independent Audits
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <section id="problem" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
              <h2
                className="text-3xl sm:text-4xl md:text-5xl"
                style={{
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                The Problem
              </h2>
            </div>

            <p
              className="mb-8 sm:mb-12 max-w-3xl text-lg sm:text-xl md:text-2xl"
              style={{
                color: "#475569",
                lineHeight: 1.7,
              }}
            >
              Hiring is becoming less human and more controlled by automated
              systems, creating an AI arms race that rewards those best at using
              AI tools rather than those most qualified.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <ProblemCard
                title="Black Box Opacity"
                description="AI hiring systems operate without transparency. Candidates are judged by systems they don't understand, using rules they cannot see, question, or appeal."
              />
              <ProblemCard
                title="Reinforced Bias"
                description="AI learns from past hiring data that reflects historical social biases. These patterns are reproduced and amplified in new decisions."
              />
              <ProblemCard
                title="Lost Accountability"
                description="Automation removes human responsibility from hiring decisions, making it unclear who is accountable when things go wrong."
              />
              <ProblemCard
                title="Unfair Advantage"
                description="Candidates with access to AI tools and knowledge of how to game algorithmic systems have significant advantages over others."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-12 sm:py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-6 sm:mb-8 text-3xl sm:text-4xl md:text-5xl"
              style={{
                fontWeight: 700,
                color: "#0F172A",
              }}
            >
              Why It Matters
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
                </div>
                <h3
                  className="text-lg sm:text-xl"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Sociotechnical System
                </h3>
                <p
                  className="text-sm sm:text-base"
                  style={{
                    color: "#64748B",
                    lineHeight: 1.7,
                  }}
                >
                  Hiring isn't just a technical process—it's where technology
                  meets human lives, shaping careers and opportunities.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-orange-900" />
                </div>
                <h3
                  className="text-lg sm:text-xl"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Inequality at Scale
                </h3>
                <p
                  className="text-sm sm:text-base"
                  style={{
                    color: "#64748B",
                    lineHeight: 1.7,
                  }}
                >
                  Technology shapes who gets opportunities and who doesn't,
                  reinforcing or challenging existing social inequalities.
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-900" />
                </div>
                <h3
                  className="text-lg sm:text-xl"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Efficiency Over Fairness
                </h3>
                <p
                  className="text-sm sm:text-base"
                  style={{
                    color: "#64748B",
                    lineHeight: 1.7,
                  }}
                >
                  Current systems prioritize speed and cost reduction over
                  transparency, accountability, and fair treatment of
                  candidates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" />
              <h2
                className="text-3xl sm:text-4xl md:text-5xl"
                style={{
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Our Solution
              </h2>
            </div>

            <p
              className="mb-8 sm:mb-12 max-w-3xl text-lg sm:text-xl md:text-2xl"
              style={{
                color: "#475569",
                lineHeight: 1.7,
              }}
            >
              An independent, non-profit certification body that enforces fair
              hiring practices while providing education and transparency to all
              stakeholders.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <SolutionCard
                icon={<BookOpen className="w-6 h-6 text-green-700" />}
                title="Student Education"
                description="Mandatory AI hiring literacy courses that help candidates understand the systems evaluating them and how to demonstrate their true capabilities."
              />
              <SolutionCard
                icon={<Building2 className="w-6 h-6 text-green-700" />}
                title="Company Certification"
                description="Certified companies commit to balanced human-AI decision making, transparency, and diversity-conscious hiring practices."
              />
              <SolutionCard
                icon={<Shield className="w-6 h-6 text-green-700" />}
                title="Independent Audits"
                description="Regular third-party audits ensure certified companies maintain fair practices and provide accountability."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-8 sm:mb-12 text-center text-3xl sm:text-4xl md:text-5xl"
              style={{
                fontWeight: 700,
                color: "#0F172A",
              }}
            >
              How It Works
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <FlowCard
                number="1"
                icon={<Users className="w-8 h-8 text-blue-700" />}
                title="Students"
                process="Education & Resources"
                outcome="Fair Applications"
                description="Students complete AI hiring literacy training and gain tools to navigate certified hiring processes."
              />
              <FlowCard
                number="2"
                icon={<Building2 className="w-8 h-8 text-blue-700" />}
                title="Companies"
                process="Certification & Compliance"
                outcome="Fair Hiring Practices"
                description="Companies adopt balanced human-AI decision structures, transparency standards, and diversity guidelines."
              />
              <FlowCard
                number="3"
                icon={<Shield className="w-8 h-8 text-blue-700" />}
                title="FairHire Alliance"
                process="Oversight & Audits"
                outcome="Trust & Accountability"
                description="Independent audits verify compliance and ensure certified companies maintain ethical hiring standards."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits & Commitment */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl"
                style={{
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Benefits for Companies
              </h3>

              <div className="space-y-6">
                <BenefitItem
                  icon={<CheckCircle2 className="w-5 h-5 text-green-700" />}
                  title="Marketing Strategies"
                  description="Allowed to use FairHire in job posts, career fairs, etc."
                />
                <BenefitItem
                  icon={<CheckCircle2 className="w-5 h-5 text-green-700" />}
                  title="Enhanced Workplace Innovation through Diversity"
                  description="Benefit from diversity in culture and genders"
                />
                <BenefitItem
                  icon={<CheckCircle2 className="w-5 h-5 text-green-700" />}
                  title="Certified Ethical Talent Acquisition"
                  description="Talent acquisition is gonna be better"
                />
                <BenefitItem
                  icon={<CheckCircle2 className="w-5 h-5 text-green-700" />}
                  title=""
                  description=""
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="mb-8"
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Benefits for Applicants
              </h3>

              <div className="space-y-6">
                <BenefitItem
                  icon={<CheckCircle2 className="w-5 h-5 text-green-700" />}
                  title="Reduces Bias"
                  description="Diversity guidelines and human oversight counter algorithmic discrimination."
                />
                <BenefitItem
                  icon={<CheckCircle2 className="w-5 h-5 text-green-700" />}
                  title="Increases Transparency"
                  description="Candidates receive clear feedback and understand how decisions are made."
                />
                <BenefitItem
                  icon={<CheckCircle2 className="w-5 h-5 text-green-700" />}
                  title="Empowers Students"
                  description="Education programs level the playing field and build AI literacy."
                />
                <BenefitItem
                  icon={<CheckCircle2 className="w-5 h-5 text-green-700" />}
                  title="Holds Companies Accountable"
                  description="Regular audits and certification standards ensure ongoing compliance."
                />
              </div>
            </motion.div>

            {/* Transparency: Limitations */}
            {/* <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3
                className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl"
                style={{
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Our Commitment to Transparency
              </h3>

              <p
                className="mb-6 text-sm sm:text-base"
                style={{
                  color: "#64748B",
                  lineHeight: 1.7,
                }}
              >
                We acknowledge the challenges and limitations of this approach:
              </p>

              <div className="space-y-4">
                <LimitationItem
                  title="Implementation Costs"
                  description="Certification and audits require resources that may be barriers for smaller organizations."
                />
                <LimitationItem
                  title="Company Resistance"
                  description="Not all companies will voluntarily adopt stricter hiring standards without regulatory incentives."
                />
                <LimitationItem
                  title="Certification Risk"
                  description="There is potential for superficial compliance without meaningful change in practices."
                />
              </div>

              <p
                className="mt-6 text-sm sm:text-base"
                style={{
                  color: "#475569",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                }}
              >
                We are committed to addressing these limitations through
                continuous improvement, stakeholder engagement, and transparent
                reporting.
              </p>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Ready to Build a Fairer Hiring Future?
            </h2>

            <p
              className="mb-8 sm:mb-10 text-lg sm:text-xl md:text-2xl"
              style={{
                opacity: 0.9,
                lineHeight: 1.7,
              }}
            >
              Whether you're a company committed to ethical hiring or a student
              seeking transparent opportunities, FairHire Alliance is here to
              help.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-900 rounded-lg text-base sm:text-lg"
                style={{
                  fontWeight: 600,
                }}
              >
                Get Certified
              </button>
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg text-base sm:text-lg"
                style={{
                  fontWeight: 600,
                }}
              >
                Student Resources
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <LogoIcon className="w-8 h-8 sm:w-10 sm:h-10" variant="white" />
              <div className="text-center sm:text-left">
                <p
                  className="text-base sm:text-lg"
                  style={{
                    fontWeight: 600,
                  }}
                >
                  FairHire Alliance
                </p>
                <p
                  className="text-sm"
                  style={{
                    opacity: 0.7,
                  }}
                >
                  Ensuring Fair and Transparent AI Hiring
                </p>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p
                className="text-sm"
                style={{
                  opacity: 0.7,
                }}
              >
                A project by ENGR 392 students at Concordia University
              </p>
              <p
                className="text-sm"
                style={{
                  opacity: 0.5,
                  marginTop: "0.25rem",
                }}
              >
                Professor Jonathan Wald | April 2026
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProblemCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="p-4 sm:p-6 bg-red-50 border-l-4 border-red-600 rounded-r-lg"
    >
      <h3
        className="mb-2 sm:mb-3 text-lg sm:text-xl"
        style={{
          fontWeight: 600,
          color: "#DC2626",
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm sm:text-base"
        style={{
          color: "#7F1D1D",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

function SolutionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="p-4 sm:p-6 bg-green-50 rounded-lg border border-green-200"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
        {icon}
      </div>
      <h3
        className="mb-2 sm:mb-3 text-lg sm:text-xl"
        style={{
          fontWeight: 600,
          color: "#065F46",
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm sm:text-base"
        style={{
          color: "#047857",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

function FlowCard({
  number,
  icon,
  title,
  process,
  outcome,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  process: string;
  outcome: string;
  description: string;
}) {
  return (
    <div className="bg-white p-5 sm:p-8 rounded-lg border border-blue-200">
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-base sm:text-lg"
          style={{
            fontWeight: 700,
          }}
        >
          {number}
        </div>
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>

      <h3
        className="mb-2 text-xl sm:text-2xl"
        style={{
          fontWeight: 700,
          color: "#1E40AF",
        }}
      >
        {title}
      </h3>

      <p
        className="mb-3 text-sm sm:text-base"
        style={{
          color: "#3B82F6",
          fontWeight: 500,
        }}
      >
        {process}
      </p>

      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <ArrowRight className="w-4 h-4 text-green-600" />
        <p
          className="text-base sm:text-lg"
          style={{
            fontWeight: 600,
            color: "#059669",
          }}
        >
          {outcome}
        </p>
      </div>

      <p
        className="text-sm sm:text-base"
        style={{
          color: "#64748B",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}

function BenefitItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 sm:gap-4">
      <div className="mt-1 flex-shrink-0">{icon}</div>
      <div>
        <h4
          className="text-base sm:text-lg"
          style={{
            fontWeight: 600,
            color: "#0F172A",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h4>
        <p
          className="text-sm sm:text-base"
          style={{
            color: "#64748B",
            lineHeight: 1.6,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

function LimitationItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="p-3 sm:p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r">
      <h4
        className="text-sm sm:text-base"
        style={{
          fontWeight: 600,
          color: "#92400E",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h4>
      <p
        className="text-sm"
        style={{
          color: "#78350F",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}
