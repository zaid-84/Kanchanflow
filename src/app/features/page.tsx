
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Check,
  ClipboardList,
  Factory,
  GitBranch,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./features.module.css";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore KanchanFlow manufacturing CRM features for quotations, materials, sales pipelines and operational reporting.",
};

const features = [
  {
    number: "01",
    eyebrow: "QUOTATIONS & ORDERS",
    title: "From first quote to confirmed order.",
    description:
      "Keep customer requests, quotation status and order details organised in one workflow. Give your team a clearer view of what needs attention next.",
    bullets: [
      "Track quotation status",
      "Keep customer and order details together",
      "Follow opportunities through the sales cycle",
    ],
    icon: ClipboardList,
    screen: "quotations",
  },
  {
    number: "02",
    eyebrow: "BILL OF MATERIALS",
    title: "Know what goes into every build.",
    description:
      "Organise component lists and material requirements so teams can understand the parts associated with a product or manufacturing job.",
    bullets: [
      "Organise components and quantities",
      "Review material requirements",
      "Keep product information accessible",
    ],
    icon: Boxes,
    screen: "materials",
  },
  {
    number: "03",
    eyebrow: "SALES PIPELINE",
    title: "Make every opportunity visible.",
    description:
      "See where deals stand, identify pending follow-ups and give your team a shared view of the customer journey.",
    bullets: [
      "View opportunities by stage",
      "Identify follow-up priorities",
      "Understand the sales pipeline at a glance",
    ],
    icon: GitBranch,
    screen: "pipeline",
  },
  {
    number: "04",
    eyebrow: "REPORTS & INSIGHTS",
    title: "Turn operational data into clarity.",
    description:
      "Bring key activity indicators into a clear overview that helps teams review progress and identify where attention may be needed.",
    bullets: [
      "Review key performance indicators",
      "Monitor order and sales activity",
      "Support more informed decisions",
    ],
    icon: BarChart3,
    screen: "reports",
  },
];

const comparison = [
  {
    feature: "Quotation tracking",
    kanchanflow: true,
    scattered: false,
  },
  {
    feature: "Customer opportunity pipeline",
    kanchanflow: true,
    scattered: false,
  },
  {
    feature: "Bill of materials overview",
    kanchanflow: true,
    scattered: false,
  },
  {
    feature: "Centralised order information",
    kanchanflow: true,
    scattered: false,
  },
  {
    feature: "Connected operational overview",
    kanchanflow: true,
    scattered: false,
  },
];

function ProductPreview({ type }: { type: string }) {
  return (
    <div className={styles.preview}>
      <div className={styles.previewTop}>
        <div className={styles.previewBrand}>
          <span className={styles.previewLogo}>K.</span>
          <span>KanchanFlow</span>
        </div>
        <span className={styles.previewStatus}>WORKSPACE PREVIEW</span>
      </div>

      <div className={styles.previewBody}>
        <div className={styles.previewSidebar}>
          <span className={styles.sidebarActive} />
          <span />
          <span />
          <span />
        </div>

        <div className={styles.previewContent}>
          <div className={styles.previewHeading}>
            <div>
              <span className={styles.previewMuted}>WORKSPACE / OVERVIEW</span>
              <h3>
                {type === "quotations" && "Quotations"}
                {type === "materials" && "Materials"}
                {type === "pipeline" && "Sales pipeline"}
                {type === "reports" && "Performance"}
              </h3>
            </div>
            <span className={styles.previewDot} />
          </div>

          {type === "quotations" && (
            <div className={styles.quoteList}>
              {[
                ["QT-2048", "Precision Components", "In review"],
                ["QT-2047", "Industrial Systems", "Approved"],
                ["QT-2046", "Mechanical Works", "Pending"],
              ].map((item) => (
                <div className={styles.quoteRow} key={item[0]}>
                  <span className={styles.quoteId}>{item[0]}</span>
                  <span>{item[1]}</span>
                  <span className={styles.quoteStatus}>{item[2]}</span>
                </div>
              ))}
            </div>
          )}

          {type === "materials" && (
            <div className={styles.materialList}>
              {[
                ["Steel assembly", "24 components"],
                ["Drive unit", "8 components"],
                ["Control panel", "12 components"],
              ].map((item, index) => (
                <div className={styles.materialRow} key={item[0]}>
                  <span className={styles.materialIcon}>
                    {index + 1}
                  </span>
                  <span className={styles.materialName}>{item[0]}</span>
                  <span className={styles.materialCount}>{item[1]}</span>
                </div>
              ))}
            </div>
          )}

          {type === "pipeline" && (
            <div className={styles.pipeline}>
              {[
                ["New", "12", "45%"],
                ["In progress", "08", "68%"],
                ["Won", "16", "86%"],
              ].map((item) => (
                <div className={styles.pipelineItem} key={item[0]}>
                  <div className={styles.pipelineLabel}>
                    <span>{item[0]}</span>
                    <strong>{item[1]}</strong>
                  </div>
                  <div className={styles.pipelineTrack}>
                    <span style={{ width: item[2] }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {type === "reports" && (
            <div className={styles.reportContent}>
              <div className={styles.reportStats}>
                <div>
                  <span>Orders</span>
                  <strong>128</strong>
                </div>
                <div>
                  <span>Open quotes</span>
                  <strong>34</strong>
                </div>
              </div>
              <div className={styles.chart}>
                {[36, 56, 43, 76, 58, 88, 66, 96, 72, 82, 61, 100].map(
                  (height, index) => (
                    <span
                      key={index}
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>
              <span className={styles.chartCaption}>
                Illustrative activity overview
              </span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.previewFoot}>
        <span />
        <span>Connected workflow</span>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <p className={styles.eyebrow}>
              <Factory size={15} />
              BUILT FOR MANUFACTURING
            </p>

            <h1>
              Complex operations.
              <br />
              <span>Clearer control.</span>
            </h1>

            <p className={styles.heroDescription}>
              Connect your quotations, materials, sales pipeline and
              operational insights in one manufacturing CRM experience.
            </p>

            <div className={styles.heroActions}>
              <Link href="/pricing" className={styles.primaryButton}>
                Explore plans <ArrowRight size={17} />
              </Link>
              <Link href="/#contact" className={styles.secondaryButton}>
                Talk to our team <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className={styles.heroFoot}>
              <span>01 / SALES VISIBILITY</span>
              <span>02 / MATERIAL CLARITY</span>
              <span>03 / OPERATIONAL INSIGHT</span>
            </div>
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>THE CAPABILITIES</p>
                <h2>
                  One workspace.
                  <br />
                  <span>Four essential workflows.</span>
                </h2>
              </div>
              <p>
                Designed to help industrial teams spend less time
                chasing information and more time moving work forward.
              </p>
            </div>

            <div className={styles.featureRows}>
              {features.map((feature, index) => {
                const FeatureIcon = feature.icon;

                return (
                  <article
                    className={`${styles.featureRow} ${
                      index % 2 === 1 ? styles.reverse : ""
                    }`}
                    key={feature.number}
                  >
                    <div className={styles.featureCopy}>
                      <div className={styles.featureMeta}>
                        <span>{feature.number}</span>
                        <span>{feature.eyebrow}</span>
                      </div>

                      <div className={styles.featureIcon}>
                        <FeatureIcon size={22} />
                      </div>

                      <h3>{feature.title}</h3>
                      <p className={styles.featureDescription}>
                        {feature.description}
                      </p>

                      <ul className={styles.featureBullets}>
                        {feature.bullets.map((bullet) => (
                          <li key={bullet}>
                            <Check size={16} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <ProductPreview type={feature.screen} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.comparisonSection}>
          <div className={styles.container}>
            <div className={styles.comparisonHeading}>
              <p className={styles.eyebrow}>A MORE CONNECTED APPROACH</p>
              <h2>
                Less information scattered.
                <br />
                <span>More visibility in one place.</span>
              </h2>
              <p>
                Compare a connected CRM workflow with information
                managed across separate tools.
              </p>
            </div>

            <div className={styles.tableWrap}>
              <table className={styles.comparisonTable}>
                <thead>
                  <tr>
                    <th scope="col">Capability</th>
                    <th scope="col">KanchanFlow concept</th>
                    <th scope="col">Separate tools</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item) => (
                    <tr key={item.feature}>
                      <th scope="row">{item.feature}</th>
                      <td>
                        <span className={styles.positive}>
                          <Check size={15} /> Connected
                        </span>
                      </td>
                      <td>
                        <span className={styles.neutral}>May be fragmented</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={styles.tableNote}>
              This table illustrates the intended product workflow,
              not a verified benchmark against specific competitors.
            </p>
          </div>
        </section>

        <section className={styles.bottomCta} id="contact">
          <div className={styles.container}>
            <div className={styles.ctaPanel}>
              <div>
                <p className={styles.eyebrow}>YOUR NEXT STEP</p>
                <h2>
                  Bring your workflow
                  <br />
                  <span>into focus.</span>
                </h2>
                <p>
                  Explore the plans designed for your team's next stage.
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
