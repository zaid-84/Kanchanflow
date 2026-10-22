
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Factory,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./pricing.module.css";

const plans = [
  {
    name: "Starter",
    description: "For small manufacturing teams getting organized.",
    monthly: 999,
    annual: 799,
    icon: Factory,
    features: [
      "Quotation management",
      "Basic sales pipeline",
      "Customer records",
      "Standard reporting",
      "Email support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    description: "For growing businesses connecting sales and operations.",
    monthly: 2499,
    annual: 1999,
    icon: Zap,
    features: [
      "Everything in Starter",
      "Bill of materials tracking",
      "Work order management",
      "Advanced reporting",
      "Priority support",
      "Team collaboration",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    description: "For manufacturers with complex workflows.",
    monthly: null,
    annual: null,
    icon: ShieldCheck,
    features: [
      "Everything in Professional",
      "Custom workflows",
      "Advanced access controls",
      "Dedicated onboarding",
      "Custom integrations",
      "Priority assistance",
    ],
    featured: false,
  },
];

const faqs = [
  {
    question: "Can I change my plan later?",
    answer:
      "The plan structure is illustrative for this frontend assignment. In a production product, plan changes would depend on the subscription and billing setup.",
  },
  {
    question: "Does KanchanFlow include manufacturing workflows?",
    answer:
      "The concept covers quotations, bill of materials tracking, sales pipelines, and work orders in one connected workspace.",
  },
  {
    question: "Is there an Enterprise option?",
    answer:
      "Yes, this pricing concept includes an Enterprise tier for businesses that need more tailored workflows and integrations.",
  },
  {
    question: "Are these prices final?",
    answer:
      "No. These are sample prices used to demonstrate the pricing interface. They should be confirmed before a real product launch.",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            SIMPLE, TRANSPARENT PRICING
          </div>

          <h1>
            The right tools.
            <br />
            <span>Without the chaos.</span>
          </h1>

          <p className={styles.heroDescription}>
            Bring quotations, materials, sales, and production workflows
            together with a plan built around your manufacturing business.
          </p>

          <div className={styles.billingControl}>
            <button
              type="button"
              className={billing === "monthly" ? styles.billingActive : ""}
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
            >
              Monthly
            </button>

            <button
              type="button"
              className={billing === "annual" ? styles.billingActive : ""}
              onClick={() => setBilling("annual")}
              aria-pressed={billing === "annual"}
            >
              Annually
              <span className={styles.saveLabel}>SAVE 20%</span>
            </button>
          </div>

          <p className={styles.billingNote}>
            {billing === "annual"
              ? "Annual billing selected · sample discounted rates"
              : "Monthly billing selected · sample rates"}
          </p>
        </section>

        <section className={styles.plans} aria-label="Pricing plans">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price =
              billing === "annual" ? plan.annual : plan.monthly;

            return (
              <article
                className={`${styles.planCard} ${
                  plan.featured ? styles.featuredCard : ""
                }`}
                key={plan.name}
              >
                {plan.featured && (
                  <div className={styles.popularLabel}>MOST POPULAR</div>
                )}

                <div className={styles.planIcon}>
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <h2>{plan.name}</h2>
                <p className={styles.planDescription}>{plan.description}</p>

                <div className={styles.price}>
                  {price === null ? (
                    <span className={styles.customPrice}>Custom</span>
                  ) : (
                    <>
                      <span className={styles.currency}>₹</span>
                      <span className={styles.priceNumber}>
                        {price.toLocaleString("en-IN")}
                      </span>
                      <span className={styles.pricePeriod}>/ month</span>
                    </>
                  )}
                </div>

                <p className={styles.billingDetail}>
                  {price === null
                    ? "Tailored to your requirements"
                    : billing === "annual"
                      ? "Billed annually · sample pricing"
                      : "Billed monthly"}
                </p>

                <Link
                  href="/#contact"
                  className={
                    plan.featured
                      ? styles.primaryButton
                      : styles.secondaryButton
                  }
                >
                  {plan.name === "Enterprise"
                    ? "Contact our team"
                    : "Get started"}
                  <ArrowUpRight size={17} />
                </Link>

                <div className={styles.featureDivider} />

                <p className={styles.includesLabel}>WHAT&apos;S INCLUDED</p>

                <ul className={styles.featureList}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </section>

        <section className={styles.note}>
          <p>
            <span>NOTE</span> Pricing shown is illustrative for the assignment
            and does not represent a live subscription offer.
          </p>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqIntro}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              GOT QUESTIONS?
            </div>
            <h2>
              Clear answers.
              <br />
              <span>Better decisions.</span>
            </h2>
            <p>
              A few things to know before choosing a plan for your team.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div className={styles.faqItem} key={faq.question}>
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`${styles.faqIcon} ${
                        isOpen ? styles.faqIconOpen : ""
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div>
            <p className={styles.eyebrow}>BUILT FOR THE FACTORY FLOOR</p>
            <h2>
              Ready to bring
              <br />
              <span>it all together?</span>
            </h2>
            <p>
              Give your manufacturing team a clearer way to work.
            </p>
          </div>

          <Link href="/#contact" className={styles.primaryButton}>
            Talk to our team <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
