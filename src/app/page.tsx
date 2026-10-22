
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Boxes,
  GitBranch,
  MessageCircle,
  ChartNoAxesCombined,
  Smartphone,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Manufacturing CRM",
  description:
    "Connect manufacturing quotations, bills of materials, work orders and your sales pipeline with KanchanFlow.",
};

const features = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Quote to order",
    description:
      "Turn customer enquiries into structured quotations and confirmed orders without losing important details.",
  },
  {
    number: "02",
    icon: Boxes,
    title: "Bill of materials",
    description:
      "Organise components, quantities and material requirements before production begins.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Sales pipeline",
    description:
      "See where every opportunity stands, from the first enquiry to the final order.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "WhatsApp updates",
    description:
      "Keep customer communication connected to your sales workflow.",
  },
  {
    number: "05",
    icon: ChartNoAxesCombined,
    title: "Business reports",
    description:
      "Get a clearer view of quotations, order progress and sales performance.",
  },
  {
    number: "06",
    icon: Smartphone,
    title: "Work on the move",
    description:
      "Access a responsive workspace when you are away from your desk.",
  },
];

const industries = [
  "Metal fabrication",
  "Machine manufacturing",
  "Industrial components",
  "Engineering workshops",
  "OEM suppliers",
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid} aria-hidden="true" />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.statusDot} />
                THE MANUFACTURING WORKSPACE
              </div>

              <h1 className={styles.heroTitle}>
                Less chasing.
                <br />
                <span>More making.</span>
              </h1>

              <p className={styles.heroDescription}>
                Bring quotations, materials, sales and work orders
                into one connected workflow. Give your manufacturing
                business the clarity to move forward.
              </p>

              <div className={styles.heroActions}>
                <Link href="/pricing" className={styles.primaryButton}>
                  Explore plans <ArrowRight size={17} />
                </Link>
                <Link href="/features" className={styles.secondaryButton}>
                  Discover features <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className={styles.heroNote}>
                <CheckCircle2 size={16} />
                <span>Designed for real manufacturing workflows</span>
              </div>
            </div>

            <div className={styles.productPreview}>
              <div className={styles.previewTopbar}>
                <div className={styles.windowDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <span className={styles.previewLabel}>
                  KANCHANFLOW / WORKSPACE
                </span>
                <span className={styles.liveIndicator}>DEMO</span>
              </div>

              <div className={styles.previewBody}>
                <aside className={styles.previewSidebar}>
                  <div className={styles.miniLogo}>
                    <span>K</span> KANCHANFLOW
                  </div>
                  <div className={styles.sideActive}>Overview</div>
                  <div className={styles.sideItem}>Quotations</div>
                  <div className={styles.sideItem}>Work orders</div>
                  <div className={styles.sideItem}>Materials</div>
                  <div className={styles.sideItem}>Reports</div>
                </aside>

                <div className={styles.previewMain}>
                  <div className={styles.previewHeading}>
                    <div>
                      <p>MONDAY, 09:41 AM</p>
                      <h2>Operations overview</h2>
                    </div>
                    <span className={styles.avatar}>KF</span>
                  </div>

                  <div className={styles.metricGrid}>
                    <div className={styles.metricCard}>
                      <span>Open quotations</span>
                      <strong>24</strong>
                      <small>Needs follow-up</small>
                    </div>
                    <div className={styles.metricCard}>
                      <span>Active orders</span>
                      <strong>18</strong>
                      <small>In the workflow</small>
                    </div>
                    <div className={styles.metricCard}>
                      <span>Pending review</span>
                      <strong>07</strong>
                      <small>Awaiting action</small>
                    </div>
                  </div>

                  <div className={styles.pipelineCard}>
                    <div className={styles.pipelineHeader}>
                      <h3>Sales pipeline</h3>
                      <span>Illustrative data</span>
                    </div>
                    <div className={styles.pipelineRow}>
                      <span>New enquiries</span>
                      <div className={styles.pipelineTrack}>
                        <span style={{ width: "88%" }} />
                      </div>
                      <strong>22</strong>
                    </div>
                    <div className={styles.pipelineRow}>
                      <span>Quotation sent</span>
                      <div className={styles.pipelineTrack}>
                        <span style={{ width: "65%" }} />
                      </div>
                      <strong>16</strong>
                    </div>
                    <div className={styles.pipelineRow}>
                      <span>Order confirmed</span>
                      <div className={styles.pipelineTrack}>
                        <span style={{ width: "42%" }} />
                      </div>
                      <strong>10</strong>
                    </div>
                  </div>

                  <p className={styles.previewDisclaimer}>
                    Conceptual interface preview — not live business data.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.heroFootnote}>
              <span>BUILT FOR THE FACTORY FLOOR</span>
              <span>SALES · MATERIALS · OPERATIONS</span>
            </div>
          </div>
        </section>

        <section className={styles.problemSection}>
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <p className={styles.sectionEyebrow}>THE EVERYDAY CHALLENGE</p>
              <h2 className={styles.sectionTitle}>
                Your production is connected.
                <br />
                <span>Your information should be too.</span>
              </h2>
              <p className={styles.sectionDescription}>
                Spreadsheets, scattered messages and disconnected
                processes make it harder to know what needs attention.
                KanchanFlow brings the workflow into one clearer view.
              </p>
            </div>

            <div className={styles.featureGrid}>
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article className={styles.featureCard} key={feature.number}>
                    <div className={styles.featureTop}>
                      <span className={styles.featureIcon}>
                        <Icon size={21} />
                      </span>
                      <span className={styles.featureNumber}>
                        {feature.number}
                      </span>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <Link
                      href="/features"
                      className={styles.cardLink}
                      aria-label={`Learn more about ${feature.title}`}
                    >
                      Learn more <ArrowUpRight size={15} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.industriesSection}>
          <div className={styles.container}>
            <div className={styles.industriesHeading}>
              <p className={styles.sectionEyebrow}>MADE FOR INDUSTRY</p>
              <h2>Built around how manufacturing works.</h2>
            </div>

            <div className={styles.industryList}>
              {industries.map((industry) => (
                <div className={styles.industryItem} key={industry}>
                  <span className={styles.industryMark} />
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <section className={styles.pricingSection}>
          <div className={styles.container}>
            <div className={styles.pricingIntro}>
              <p className={styles.sectionEyebrow}>SIMPLE, CLEAR PRICING</p>
              <h2>
                The right tools for
                <br />
                <span>your next stage of growth.</span>
              </h2>
              <p>
                Start with the essentials and explore the tools
                your manufacturing team needs as it grows.
              </p>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingCardTop}>
                <div>
                  <span className={styles.planLabel}>MADE FOR YOUR WORKFLOW</span>
                  <h3>Manufacturing CRM</h3>
                </div>
                <span className={styles.planBadge}>Flexible plans</span>
              </div>

              <p className={styles.pricingDescription}>
                Manage quotations, materials, customer opportunities
                and work orders in one connected workspace.
              </p>

              <ul className={styles.pricingBenefits}>
                <li><CheckCircle2 size={17} /> Quotation and order tracking</li>
                <li><CheckCircle2 size={17} /> Bill of materials management</li>
                <li><CheckCircle2 size={17} /> Sales pipeline visibility</li>
                <li><CheckCircle2 size={17} /> Reports for better decisions</li>
              </ul>

              <div className={styles.pricingCardBottom}>
                <span>Find the right plan for your team.</span>
                <Link href="/pricing" className={styles.primaryButton}>
                  Explore pricing <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqLayout}>
              <div className={styles.faqIntro}>
                <p className={styles.sectionEyebrow}>GOOD QUESTIONS</p>
                <h2>
                  Clarity before
                  <br />
                  <span>you get started.</span>
                </h2>
                <p>
                  A few quick answers about KanchanFlow and how
                  it supports manufacturing workflows.
                </p>
                <Link href="/features" className={styles.faqLink}>
                  Explore all features <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className={styles.faqList}>
                <details className={styles.faqItem}>
                  <summary>
                    What is KanchanFlow?
                    <ChevronDown size={18} />
                  </summary>
                  <p>
                    KanchanFlow is a manufacturing CRM concept designed
                    to bring quotations, bills of materials, sales
                    opportunities and work orders into one connected
                    workflow.
                  </p>
                </details>

                <details className={styles.faqItem}>
                  <summary>
                    Who is KanchanFlow designed for?
                    <ChevronDown size={18} />
                  </summary>
                  <p>
                    It is designed for manufacturing businesses,
                    engineering workshops, machine manufacturers and
                    industrial suppliers that want better visibility
                    across sales and operations.
                  </p>
                </details>

                <details className={styles.faqItem}>
                  <summary>
                    Can I manage quotations and work orders together?
                    <ChevronDown size={18} />
                  </summary>
                  <p>
                    The product concept connects quotation and order
                    tracking with materials and operational workflows,
                    helping teams keep important information organised.
                  </p>
                </details>

                <details className={styles.faqItem}>
                  <summary>
                    Does KanchanFlow offer different plans?
                    <ChevronDown size={18} />
                  </summary>
                  <p>
                    The pricing page presents the plan options for this
                    assignment prototype. Contact the product team to
                    confirm actual availability and commercial terms.
                  </p>
                </details>

                <details className={styles.faqItem}>
                  <summary>
                    Can I use KanchanFlow on mobile?
                    <ChevronDown size={18} />
                  </summary>
                  <p>
                    This website is designed to adapt to mobile screens.
                    The mobile app is presented as a product feature
                    concept; actual app availability would need to be
                    confirmed by the product team.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaPanel}>
              <div>
                <p className={styles.sectionEyebrow}>BRING IT TOGETHER</p>
                <h2>Give every order a clearer path forward.</h2>
                <p>
                  Explore a more connected way to manage your
                  manufacturing sales and operations.
                </p>
              </div>
              <Link href="/pricing" className={styles.primaryButton}>
                View pricing <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
