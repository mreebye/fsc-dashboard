import React from "react";

export default function FscDashboardModern() {
  const styles = `
  :root {
    --bg: #edf0f6;
    --surface: #ffffff;
    --ink: #1b2140;
    --muted: #8a90a5;
    --radius-lg: 22px;
    --radius-md: 18px;
    --line: rgba(0,0,0,0.03);
    --accent: #4450c9;
  }
  body {
    background: var(--bg);
  }
  .fsc-page {
    min-height: 100vh;
    background: radial-gradient(circle at 0% 0%, #ffffff 0, #edf0f6 40%, #e7ebf4 80%);
    display: flex;
    justify-content: center;
    padding-bottom: 72px;
  }
  .fsc-shell {
    width: min(1240px, 100%);
    padding: 28px 18px 0;
  }
  .fsc-topbar {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    margin-bottom: 18px;
  }
  .fsc-title {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    display: flex;
    gap: 6px;
    align-items: center;
    color: #171a28;
  }
  .fsc-sub {
    font-size: .7rem;
    color: var(--muted);
    max-width: 580px;
  }
  .fsc-actions {
    display: flex;
    gap: 8px;
  }
  .btn {
    border: none;
    outline: none;
    display: inline-flex;
    gap: 6px;
    align-items: center;
    border-radius: 999px;
    font-size: .68rem;
    font-weight: 600;
    cursor: pointer;
  }
  .btn-ghost {
    background: rgba(255,255,255,0.45);
    border: 1px solid rgba(139,148,173,0.36);
    padding: 6px 15px 7px;
    color: #1f2545;
  }
  .btn-primary {
    background: linear-gradient(140deg, #4b57e7 0%, #1f2344 100%);
    color: #fff;
    padding: 6px 16px 7px;
    box-shadow: 0 12px 25px rgba(58, 64, 156, 0.42);
  }
  /* KPI BAR */
  .kpi-strip {
    background: radial-gradient(circle at top, #3e3969 0, #24253f 100%);
    border-radius: 20px;
    padding: 11px 14px 12px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
    gap: 10px;
    margin-bottom: 14px;
    box-shadow: 0 16px 40px rgba(32, 33, 62, 0.22);
  }
  .kpi-card {
    background: rgba(14,14,23,0.09);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 6px 11px 8px;
  }
  .kpi-head {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: .58rem;
    color: rgba(244,244,248,0.86);
  }
  .kpi-icon {
    width: 21px;
    height: 21px;
    border-radius: 12px;
    background: rgba(255,255,255,0.15);
    display: grid;
    place-items: center;
  }
  .kpi-value {
    font-size: 1.14rem;
    font-weight: 600;
    color: #fff;
    margin-top: 2px;
  }
  .kpi-caption {
    font-size: .57rem;
    color: rgba(255,255,255,0.58);
  }

  /* MAIN GRID like your mockup */
  .main-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr 0.85fr;
    grid-template-areas:
      "heatmap  scoreboard scoreboard"
      "pep      inspect   inspect"
      "str      supervise access"
      "predict  national  ask";
    gap: 14px;
  }

  .widget {
    background: var(--surface);
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.68);
    box-shadow: 0 14px 32px rgba(29, 35, 68, 0.03);
    padding: 12px 14px 12px;
  }
  .widget-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .w-title {
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: .78rem;
    font-weight: 600;
    color: #161b2f;
  }
  .w-icon {
    width: 28px;
    height: 28px;
    border-radius: 1rem;
    background: rgba(68,80,201,0.08);
    display: grid;
    place-items: center;
    color: #3c4cc7;
  }
  .mini-pill {
    background: rgba(73, 82, 119, 0.06);
    border-radius: 999px;
    font-size: .6rem;
    padding: 3px 10px 4px;
    color: #5a6072;
  }

  .heatmap { grid-area: heatmap; }
  .scoreboard { grid-area: scoreboard; }
  .pep { grid-area: pep; }
  .inspect { grid-area: inspect; }
  .str-edd { grid-area: str; }
  .supervision { grid-area: supervise; }
  .access-log { grid-area: access; }
  .predict { grid-area: predict; }
  .national { grid-area: national; }
  .ask { grid-area: ask; }

  /* Heatmap table */
  .heatmap-table {
    display: grid;
    gap: 6px;
    font-size: .64rem;
  }
  .heatmap-row {
    display: grid;
    grid-template-columns: 1.1fr repeat(6, 0.35fr);
    gap: 6px;
    align-items: center;
  }
  .heatmap-row.header {
    font-weight: 500;
    color: #8b90a8;
    font-size: .6rem;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(197,201,214,0.28);
  }
  .dot { width: 16px; height: 16px; border-radius: .55rem; }
  .dot.green { background: #10c7a8; }
  .dot.yellow { background: #ffd469; }
  .dot.orange { background: #f6a564; }
  .dot.red { background: #f36b6b; }

  /* Compliance table */
  .compliance-table { width: 100%; border-collapse: separate; border-spacing: 0; font-size: .63rem; }
  .compliance-table thead th {
    text-align: left; padding: 5px 3px 9px; color: #6b7280; font-weight: 600; border-bottom: 1px solid rgba(226, 229, 236, 0.8);
  }
  .compliance-table tbody td {
    padding: 6px 3px 6px;
    border-bottom: 1px solid rgba(236, 239, 245, 0.6);
  }
  .trend-pill {
    display: inline-block;
    padding: 3px 10px 4px;
    border-radius: 999px;
    font-size: .56rem;
    font-weight: 600;
  }
  .trend-success { background: #22b574; color: #fff; }
  .trend-warning { background: #f59e0b; color: #fff; }
  .trend-neutral { background: #1f2937; color: #fff; }

  /* Inspection cards */
  .inspection-list { display: flex; flex-direction: column; gap: 9px; }
  .inspection-item {
    background: #f3f5fb;
    border: 1px solid rgba(241, 244, 251, 0.8);
    border-radius: 14px;
    padding: 6px 9px 7px 9px;
    display: flex;
    justify-content: space-between;
    gap: 9px;
    align-items: center;
  }
  .inspection-item.risk-high { border-left: 5px solid #f36b6b; }
  .inspection-item.risk-med { border-left: 5px solid #f6a564; }
  .inspection-item.risk-low { border-left: 5px solid #ffdf7b; }
  .ins-left { display: flex; gap: 8px; align-items: center; }
  .badge-num {
    width: 32px;
    height: 32px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    color: #fff;
    font-weight: 700;
    font-size: .66rem;
  }
  .badge-red { background: #f36b6b; }
  .badge-orange { background: #f6a564; }
  .badge-yellow { background: #ffdf7b; color: #5f4b09; }
  .ins-title { font-weight: 600; font-size: .66rem; }
  .ins-tags { font-size: .57rem; color: #7a8095; }
  .sla-badge {
    background: rgba(37, 41, 64, 0.06);
    border-radius: 999px;
    font-size: .58rem;
    padding: 3px 7px 4px;
  }

  /* Tiny cards */
  .small-note { font-size: .6rem; color: #717792; margin-top: 6px; }

  /* Access log */
  .log-table { width: 100%; border-collapse: collapse; font-size: .6rem; }
  .log-table th { text-align: left; color: #99a2b0; padding-bottom: 6px; }
  .log-table td { padding: 4px 4px 4px 0; border-bottom: 1px solid rgba(233,236,242,0.55); }

  /* Ask input */
  .ask-input { display: flex; gap: 6px; }
  .ask-input input {
    flex: 1;
    background: #f3f4f7;
    border: 1px solid rgba(154, 165, 189, 0.09);
    border-radius: 11px;
    padding: 6px 10px;
    font-size: .6rem;
  }

  @media (max-width: 1100px) {
    .main-grid {
      grid-template-columns: 1fr;
      grid-template-areas:
        "heatmap"
        "scoreboard"
        "pep"
        "inspect"
        "str"
        "supervise"
        "access"
        "predict"
        "national"
        "ask";
    }
  }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="fsc-page">
        <div className="fsc-shell">
         {/* TOP BAR */}
<header
  className="fsc-topbar"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1.5rem",
    marginBottom: "1.25rem",
  }}
>
  <div>
    <div
      className="fsc-title"
      style={{
        fontSize: "1.6rem",
        fontWeight: 700,
        color: "#182130",
        lineHeight: 1.05,
      }}
    >
      FSC Supervision Command Center
      <span
        className="fsc-subtitle"
        style={{
          display: "block",          // puts it on the next line
          fontSize: "0.7rem",        // smaller
          color: "#8a8fa3",
          marginTop: "0.3rem",
        }}
      >
        — Full Compliance Signals Dashboard
      </span>
    </div>
    <p
      className="fsc-sub"
      style={{
        marginTop: "0.55rem",
        fontSize: "0.7rem",
        color: "#7f8591",
        maxWidth: "46rem",
      }}
    >
      Comprehensive oversight: risk signals, PEP tracking, inspection queue, predictive
      prioritisation, and national readiness metrics.
    </p>
  </div>

  <div
    className="fsc-actions"
    style={{ display: "flex", gap: "0.6rem", flexShrink: 0 }}
  >
    <button
      className="btn btn-ghost"
      style={{
        padding: "0.45rem 0.85rem",
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.04)",
        borderRadius: "0.7rem",
        fontSize: "0.68rem",
        color: "#1f2733",
      }}
    >
      Export Summary
    </button>
    <button
      className="btn btn-primary"
      style={{
        padding: "0.45rem 0.95rem",
        background: "linear-gradient(120deg, #5b62ff, #28328f)",
        border: "none",
        borderRadius: "0.7rem",
        fontSize: "0.68rem",
        color: "#fff",
        boxShadow: "0 8px 18px rgba(28, 45, 118, 0.25)",
      }}
    >
      Generate Quarterly Report
    </button>
  </div>
</header>



          {/* KPI STRIP */}
          <section className="kpi-strip">
            <article className="kpi-card">
              <div className="kpi-head">
                <span className="kpi-icon">📊</span> <span>Avg Composite Risk</span>
              </div>
              <div className="kpi-value">68/100</div>
              <div className="kpi-caption">Weighted for sector, company, product &amp; monitoring.</div>
            </article>
            <article className="kpi-card">
              <div className="kpi-head">
                <span className="kpi-icon">⚠️</span> <span>High-Risk Firms</span>
              </div>
              <div className="kpi-value">14 of 208</div>
              <div className="kpi-caption">Best band (97th)</div>
            </article>
            <article className="kpi-card">
              <div className="kpi-head">
                <span className="kpi-icon">🗂</span> <span>Overdue CDD Reviews</span>
              </div>
              <div className="kpi-value">127 files</div>
              <div className="kpi-caption">Needs clearance.</div>
            </article>
            <article className="kpi-card">
              <div className="kpi-head">
                <span className="kpi-icon">🚨</span> <span>Unresolved Sanctions/PEP</span>
              </div>
              <div className="kpi-value">22 alerts</div>
              <div className="kpi-caption">Awaiting disposition.</div>
            </article>
            <article className="kpi-card">
              <div className="kpi-head">
                <span className="kpi-icon">📝</span> <span>STRs (Last 30d)</span>
              </div>
              <div className="kpi-value">9 filed</div>
              <div className="kpi-caption">FIU submissions.</div>
            </article>
            <article className="kpi-card">
              <div className="kpi-head">
                <span className="kpi-icon">📋</span> <span>Open Audit Findings</span>
              </div>
              <div className="kpi-value">36 items</div>
              <div className="kpi-caption">Independent, AML/CFT audits.</div>
            </article>
          </section>

          {/* MAIN GRID as per your mockup */}
          <section className="main-grid">
            {/* RISK HEATMAP */}
            <article className="widget heatmap">
              <div className="widget-head">
                <div className="w-title">
                  <div className="w-icon">📡</div>
                  Risk Signals Heatmap
                </div>
                <div className="mini-pill">Dimensions</div>
              </div>
              <div className="heatmap-table">
                <div className="heatmap-row header">
                  <span>Company</span>
                  <span>KYC</span>
                  <span>Filings</span>
                  <span>Governance</span>
                  <span>Sanctions</span>
                  <span>PEPs</span>
                  <span>Audit</span>
                </div>
                <div className="heatmap-row">
                  <span>Ocarion</span>
                  <span className="dot green" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="dot orange" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="heatmap-row">
                  <span>Rogers</span>
                  <span className="dot yellow" />
                  <span className="dot red" />
                  <span className="dot green" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="dot yellow" />
                </div>
                <div className="heatmap-row">
                  <span>Trident</span>
                  <span className="dot green" />
                  <span className="dot yellow" />
                  <span className="dot yellow" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                  <span className="dot green" />
                </div>
              </div>
            </article>

            {/* COMPLIANCE SCOREBOARD */}
            <article className="widget scoreboard">
              <div className="widget-head">
                <div className="w-title">
                  <div className="w-icon">📑</div>
                  Compliance Scoreboard by Company
                </div>
              </div>
              <table className="compliance-table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Composite</th>
                    <th>KYC %</th>
                    <th>Filings %</th>
                    <th>Open Alerts</th>
                    <th>Site Visits Saved</th>
                    <th>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ocorian (MU)</td>
                    <td>93</td>
                    <td>98%</td>
                    <td>100%</td>
                    <td>2</td>
                    <td>5</td>
                    <td>
                      <span className="trend-pill trend-success">Improving</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Rogers Capital</td>
                    <td>75</td>
                    <td>89%</td>
                    <td>80%</td>
                    <td>5</td>
                    <td>8</td>
                    <td>
                      <span className="trend-pill trend-warning">Declining</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Axis Corporate</td>
                    <td>68</td>
                    <td>84%</td>
                    <td>85%</td>
                    <td>9</td>
                    <td>7</td>
                    <td>
                      <span className="trend-pill trend-warning">Declining</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Trident Trust</td>
                    <td>88</td>
                    <td>97%</td>
                    <td>95%</td>
                    <td>1</td>
                    <td>4</td>
                    <td>
                      <span className="trend-pill trend-neutral">Stable</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </article>

            {/* PEP RELATIONSHIPS */}
<article className="widget pep">
  <div className="widget-head">
    <div className="w-title">
      <div className="w-icon">🧭</div>
      PEP Relationships
    </div>
  </div>
  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
    <svg width="110" height="110" viewBox="0 0 110 110">
      {/* main teal segment */}
      <circle
        cx="55"
        cy="55"
        r="40"
        fill="transparent"
        stroke="#04b7a7"
        strokeWidth="12"
        strokeDasharray="220 252"
        strokeLinecap="butt"
        transform="rotate(-90 55 55)"
      />
      {/* yellow segment */}
      <circle
        cx="55"
        cy="55"
        r="40"
        fill="transparent"
        stroke="#f8c024"
        strokeWidth="12"
        strokeDasharray="65 252"
        strokeLinecap="butt"
        transform="rotate(20 55 55)"
      />
      {/* inner hole */}
      <circle cx="55" cy="55" r="26" fill="#fff" />
    </svg>

    <div style={{ fontSize: ".62rem" }}>
      <p><strong>Active PEPs: 12</strong></p>
      <p
        style={{
          background: "rgba(4,183,167,0.14)",
          color: "#068a7d",
          padding: "3px 10px 4px",
          borderRadius: "999px",
          display: "inline-block",
          fontSize: ".58rem",
          marginBottom: "4px"
        }}
      >
        EDD &amp; SOW/POB complete: 9
      </p>
      <p
        style={{
          background: "rgba(248,192,36,0.14)",
          color: "#b3810b",
          padding: "3px 10px 4px",
          borderRadius: "999px",
          display: "inline-block",
          fontSize: ".58rem"
        }}
      >
        Pending approvals: 3
      </p>
      <p style={{ marginTop: "6px", color: "#8a8fa3" }}>
        Senior management approval required for all PEPs, if not granted in 5 days.
      </p>
    </div>
  </div>
</article>


   {/* INSPECTION QUEUE */}
<article className="widget inspect">
  <div className="widget-head">
    <div className="w-title">
      <div className="w-icon">🗂</div>
      Inspection Queue (Ranked)
    </div>
    <button className="btn btn-ghost" style={{ fontSize: ".57rem" }}>
      Export Selected Packs
    </button>
  </div>
  <div className="inspection-list">
    <div className="inspection-item risk-high">
      <div className="ins-left">
        <span className="badge-num badge-red">74</span>
        <div>
          <div className="ins-title">Magma Corp</div>
          <div className="ins-tags">
            Sanctions backlog • CDD overdue • High-risk corridor gates
          </div>
        </div>
      </div>
      <div className="ins-right">
        <button className="ins-btn ghost">Open Case</button>
        <button className="ins-btn primary">Supervisory Pack</button>
        <span className="sla-badge">SLA: 3d</span>
      </div>
    </div>

    <div className="inspection-item risk-med">
      <div className="ins-left">
        <span className="badge-num badge-orange">72</span>
        <div>
          <div className="ins-title">Azure Ltd</div>
          <div className="ins-tags">
            EDD pending (PEP) • Open audit findings
          </div>
        </div>
      </div>
      <div className="ins-right">
        <button className="ins-btn ghost">Open Case</button>
        <button className="ins-btn primary">Supervisory Pack</button>
        <span className="sla-badge">SLA: 5d</span>
      </div>
    </div>

    <div className="inspection-item risk-low">
      <div className="ins-left">
        <span className="badge-num badge-yellow">66</span>
        <div>
          <div className="ins-title">Elk Corporate</div>
          <div className="ins-tags">
            Thematic: third-party payments
          </div>
        </div>
      </div>
      <div className="ins-right">
        <button className="ins-btn ghost">Open Case</button>
        <button className="ins-btn primary">Supervisory Pack</button>
        <span className="sla-badge">SLA: 7d</span>
      </div>
    </div>
  </div>
</article>


            {/* STR & EDD */}
<article className="widget str-edd">
  <div className="widget-head">
    <div className="w-title">
      <div className="w-icon">🟢</div>
      STR &amp; EDD Activity Tracker
    </div>
  </div>
  <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
    {/* 3-segment donut: teal, yellow, red */}
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* teal (largest) */}
      <circle
        cx="60"
        cy="60"
        r="42"
        fill="transparent"
        stroke="#00b8a9"
        strokeWidth="14"
        strokeDasharray="205 264"
        transform="rotate(-90 60 60)"
      />
      {/* yellow (medium) */}
      <circle
        cx="60"
        cy="60"
        r="42"
        fill="transparent"
        stroke="#f9c446"
        strokeWidth="14"
        strokeDasharray="60 264"
        transform="rotate(150 60 60)"
      />
      {/* red (small) */}
      <circle
        cx="60"
        cy="60"
        r="42"
        fill="transparent"
        stroke="#f25b5b"
        strokeWidth="14"
        strokeDasharray="35 264"
        transform="rotate(210 60 60)"
      />
      {/* inner hole */}
      <circle cx="60" cy="60" r="26" fill="#fff" />
    </svg>

    <div style={{ fontSize: ".62rem" }}>
      <div style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "4px" }}>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#00b8a9" }}></span>
        <span>EDD Complete</span>
        <strong style={{ marginLeft: "auto" }}>~65%</strong>
      </div>
      <div style={{ display: "flex", gap: "6px", alignItems: "center", marginBottom: "4px" }}>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#f9c446" }}></span>
        <span>Pending Approval</span>
        <strong style={{ marginLeft: "auto" }}>~20%</strong>
      </div>
      <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "#f25b5b" }}></span>
        <span>Overdue / Escalated</span>
        <strong style={{ marginLeft: "auto" }}>8</strong>
      </div>
      <p style={{ marginTop: 6, color: "#7c8091" }}>
        EDD Reviews Overdue: <span style={{ color: "#d62828", fontWeight: 600 }}>8</span>
      </p>
    </div>
  </div>
</article>


            {/* SUPERVISION EFFICIENCY */}
<article className="widget supervision">
  <div className="widget-head">
    <div className="w-title">
      <div className="w-icon">⚙️</div>
      Supervision Efficiency (Hours per Review)
    </div>
  </div>
  <svg viewBox="0 0 270 140" style={{ width: "100%" }}>
    {/* Y axis line */}
    <line x1="42" y1="18" x2="42" y2="118" stroke="#e2e5ee" strokeWidth="1.2" />
    {/* X axis line */}
    <line x1="42" y1="118" x2="250" y2="118" stroke="#e2e5ee" strokeWidth="1.2" />

    {/* Y axis ticks + labels (0 → 100) */}
    {/* 100 */}
    <line x1="38" y1="18" x2="42" y2="18" stroke="#e2e5ee" strokeWidth="1" />
    <text x="10" y="21" fontSize="9" fill="#8a90a5">100</text>
    {/* 75 */}
    <line x1="38" y1="40" x2="42" y2="40" stroke="#e2e5ee" strokeWidth="1" />
    <text x="16" y="43" fontSize="9" fill="#8a90a5">75</text>
    {/* 50 */}
    <line x1="38" y1="62" x2="42" y2="62" stroke="#e2e5ee" strokeWidth="1" />
    <text x="16" y="65" fontSize="9" fill="#8a90a5">50</text>
    {/* 25 */}
    <line x1="38" y1="85" x2="42" y2="85" stroke="#e2e5ee" strokeWidth="1" />
    <text x="16" y="88" fontSize="9" fill="#8a90a5">25</text>
    {/* 0 */}
    <line x1="38" y1="118" x2="42" y2="118" stroke="#e2e5ee" strokeWidth="1" />
    <text x="22" y="121" fontSize="9" fill="#8a90a5">0</text>

    <defs>
      <linearGradient id="barManual" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#4450c9" />
        <stop offset="100%" stopColor="#7e8cf9" />
      </linearGradient>
      <linearGradient id="barAI" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#d5daf3" />
        <stop offset="100%" stopColor="#f0f2ff" />
      </linearGradient>
    </defs>

    {/*
      chart vertical space: 18 (top) → 118 (bottom) = 100px
      value 95 → y = 118 - (95/100)*100 = 23
      value 32 → y = 118 - (32/100)*100 = 86
    */}
    {/* Manual bar */}
    <rect
      x="70"
      y="23"
      width="55"
      height={118 - 23}
      rx="14"
      fill="url(#barManual)"
    />
    <text x="85" y="19" fontSize="11" fill="#2f3266">95h</text>
    <text x="83" y="134" fontSize="10" fill="#7f7b92">Manual</text>

    {/* AI bar */}
    <rect
      x="160"
      y="86"
      width="55"
      height={118 - 86}
      rx="14"
      fill="url(#barAI)"
    />
    <text x="178" y="82" fontSize="11" fill="#2f3266">32h</text>
    <text x="185" y="134" fontSize="10" fill="#7f7b92">AI</text>
  </svg>
  <p className="small-note">
    Est. reduction in site visits: <strong style={{ color: "#28a77b" }}>+72%</strong>
  </p>
</article>


            {/* IMMUTABLE ACCESS LOG */}
            <article className="widget access-log">
              <div className="widget-head">
                <div className="w-title">
                  <div className="w-icon">📜</div>
                  Immutable Access Log
                </div>
                <button className="btn btn-ghost" style={{ fontSize: ".57rem" }}>
                  Export CSV
                </button>
              </div>
              <table className="log-table">
                <thead>
                  <tr>
                    <th>Timestamp</th>
                    <th>Officer</th>
                    <th>Company</th>
                    <th>Scope</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2025-10-01 09:12</td>
                    <td>FSC_A.Nundall</td>
                    <td>Axis Corporate</td>
                    <td>Filings</td>
                    <td>Viewed</td>
                  </tr>
                  <tr>
                    <td>2025-10-01 11:05</td>
                    <td>FSC_J.Metoo</td>
                    <td>Rogers Capital</td>
                    <td>Risk Overview</td>
                    <td>Export CSV</td>
                  </tr>
                  <tr>
                    <td>2025-10-02 10:20</td>
                    <td>FSC_M.Randin</td>
                    <td>Ocarion (MU)</td>
                    <td>KYC Docs</td>
                    <td>Viewed</td>
                  </tr>
                </tbody>
              </table>
            </article>

            {/* PREDICTIVE RISK ENGINE */}
<article className="widget predict">
  <div className="widget-head">
    <div className="w-title">
      <div className="w-icon">📈</div>
      Predictive Risk Engine (Prioritise Supervision)
    </div>
  </div>
  <svg viewBox="0 0 320 170" style={{ width: "100%" }}>
    {/*
      Chart box:
      left = 40, right = 300
      top = 20, bottom = 130
      X: 0,25,50,75,100
      Y: 0,25,50,75,100
    */}
    {/* horizontal grid */}
    <line x1="40" y1="20" x2="300" y2="20" stroke="#d5dbe3" strokeDasharray="4 4" strokeWidth="0.7" />
    <line x1="40" y1="47" x2="300" y2="47" stroke="#d5dbe3" strokeDasharray="4 4" strokeWidth="0.7" />
    <line x1="40" y1="74" x2="300" y2="74" stroke="#d5dbe3" strokeDasharray="4 4" strokeWidth="0.7" />
    <line x1="40" y1="101" x2="300" y2="101" stroke="#d5dbe3" strokeDasharray="4 4" strokeWidth="0.7" />
    <line x1="40" y1="130" x2="300" y2="130" stroke="#d5dbe3" strokeWidth="0.7" />

    {/* vertical grid at 25, 50, 75 */}
    <line x1="103" y1="20" x2="103" y2="130" stroke="#d5dbe3" strokeDasharray="4 4" strokeWidth="0.7" />
    <line x1="166" y1="20" x2="166" y2="130" stroke="#d5dbe3" strokeDasharray="4 4" strokeWidth="0.7" />
    <line x1="233" y1="20" x2="233" y2="130" stroke="#d5dbe3" strokeDasharray="4 4" strokeWidth="0.7" />

    {/* axes */}
    <line x1="40" y1="20" x2="40" y2="130" stroke="#4d5a6c" strokeWidth="1.2" />
    <line x1="40" y1="130" x2="300" y2="130" stroke="#4d5a6c" strokeWidth="1.2" />

    {/* y labels */}
    <text x="18" y="23" fontSize="9" fill="#1f2733">100</text>
    <text x="22" y="50" fontSize="9" fill="#1f2733">75</text>
    <text x="22" y="77" fontSize="9" fill="#1f2733">50</text>
    <text x="22" y="104" fontSize="9" fill="#1f2733">25</text>
    <text x="25" y="134" fontSize="9" fill="#1f2733">0</text>

    {/* x labels */}
    <text x="38" y="145" fontSize="9" fill="#1f2733">0</text>
    <text x="96" y="145" fontSize="9" fill="#1f2733">25</text>
    <text x="160" y="145" fontSize="9" fill="#1f2733">50</text>
    <text x="226" y="145" fontSize="9" fill="#1f2733">75</text>
    <text x="294" y="145" fontSize="9" fill="#1f2733">100</text>

    {/*
      Dots (same feel as screenshot):
      (22,30) -> x≈ 40 + (22/100)*260 ≈ 97
      but screenshot shows first dot a bit left, so we hard-place them.
      We'll just place them to match the reference visually.
    */}
    <circle cx="90" cy="100" r="4" fill="#1f76c2" />
    <circle cx="105" cy="97" r="4" fill="#1f76c2" />
    <circle cx="125" cy="86" r="4" fill="#1f76c2" />
    <circle cx="145" cy="74" r="4" fill="#1f76c2" />
    <circle cx="168" cy="65" r="4" fill="#1f76c2" />
    <circle cx="195" cy="55" r="4" fill="#1f76c2" />
    <circle cx="215" cy="45" r="4" fill="#1f76c2" />
    <circle cx="235" cy="35" r="4" fill="#1f76c2" />
    <circle cx="255" cy="60" r="4" fill="#1f76c2" />

  </svg>
  <p className="small-note" style={{ marginTop: "6px" }}>
    Each dot is a company; click-through would open a dossier (full build).
  </p>
</article>


            {/* NATIONAL AML/CFT */}
<article className="widget national">
  <div className="widget-head">
    <div className="w-title">
      <div className="w-icon">🌍</div>
      National AML/CFT Readiness Index
    </div>
  </div>
  <svg viewBox="0 0 280 140" style={{ width: "100%" }}>
    {/* frame */}
    <rect x="40" y="15" width="220" height="100" rx="10" fill="#fff" stroke="#e1e5ee" />

    {/* horizontal grid (aligned to 100, 94, 86, 78, 70) */}
    <line x1="40" y1="25" x2="260" y2="25" stroke="#d7dbe3" strokeDasharray="4 4" strokeWidth="0.6" strokeOpacity="0.8" />
    <line x1="40" y1="43" x2="260" y2="43" stroke="#d7dbe3" strokeDasharray="4 4" strokeWidth="0.6" strokeOpacity="0.8" />
    <line x1="40" y1="67" x2="260" y2="67" stroke="#d7dbe3" strokeDasharray="4 4" strokeWidth="0.6" strokeOpacity="0.8" />
    <line x1="40" y1="91" x2="260" y2="91" stroke="#d7dbe3" strokeDasharray="4 4" strokeWidth="0.6" strokeOpacity="0.8" />
    <line x1="40" y1="115" x2="260" y2="115" stroke="#d7dbe3" strokeWidth="0.6" strokeOpacity="0.8" />

    {/* y-axis */}
    <line x1="40" y1="15" x2="40" y2="115" stroke="#8d939d" strokeWidth="1" />

    {/* vertical dashed lines – now aligned with dots */}
    <line x1="130" y1="15" x2="130" y2="115" stroke="#d7dbe3" strokeDasharray="4 4" strokeWidth="0.6" strokeOpacity="0.8" />
    <line x1="200" y1="15" x2="200" y2="115" stroke="#d7dbe3" strokeDasharray="4 4" strokeWidth="0.6" strokeOpacity="0.8" />

    {/* x-axis */}
    <line x1="40" y1="115" x2="260" y2="115" stroke="#8d939d" strokeWidth="1" />

    {/* y labels */}
    <text x="10" y="28" fontSize="9" fill="#5c6270">100</text>
    <text x="16" y="46" fontSize="9" fill="#5c6270">94</text>
    <text x="16" y="70" fontSize="9" fill="#5c6270">86</text>
    <text x="16" y="94" fontSize="9" fill="#5c6270">78</text>
    <text x="22" y="118" fontSize="9" fill="#5c6270">70</text>

    {/* line (values ~85 → 86 → 87 → 90) */}
    <polyline
      points="60,73 130,67 200,64 250,55"
      fill="none"
      stroke="#2f7bd3"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* dots (now perfectly on vertical grid) */}
    <circle cx="60" cy="73" r="3.4" fill="#2f7bd3" stroke="#fff" strokeWidth="1" />
    <circle cx="130" cy="67" r="3.4" fill="#2f7bd3" stroke="#fff" strokeWidth="1" />
    <circle cx="200" cy="64" r="3.4" fill="#2f7bd3" stroke="#fff" strokeWidth="1" />
    <circle cx="250" cy="55" r="3.4" fill="#2f7bd3" stroke="#fff" strokeWidth="1" />

    {/* x labels */}
    <text x="54" y="132" fontSize="9" fill="#5c6270">Q1</text>
    <text x="124" y="132" fontSize="9" fill="#5c6270">Q2</text>
    <text x="194" y="132" fontSize="9" fill="#5c6270">Q3</text>
    <text x="244" y="132" fontSize="9" fill="#5c6270">Q4</text>
  </svg>
  <p className="small-note">
    Benchmarked to FATF objectives; exportable for the FSC annual report.
  </p>
</article>



            {/* ASK UPILOT */}
            <article className="widget ask">
              <div className="widget-head">
                <div className="w-title">
                  <div className="w-icon">🤖</div>
                  Ask UPilot (AI Assistant)
                </div>
                <div className="mini-pill">Beta</div>
              </div>
              <p style={{ fontSize: ".61rem", marginBottom: "6px" }}>Examples:</p>
              <ul style={{ fontSize: ".6rem", color: "#5e6474", marginLeft: "14px" }}>
                <li>Top 10 firms by compliance deterioration in last 30 days.</li>
                <li>Companies with overdue filings and EDD simultaneously.</li>
                <li>Rank firms by predicted risk × impact for November.</li>
              </ul>
              <div className="ask-input" style={{ marginTop: "8px" }}>
                <input type="text" placeholder="Ask a question…" />
                <button className="btn btn-primary" style={{ fontSize: ".6rem" }}>
                  Run
                </button>
              </div>
            </article>
          </section>
        </div>
      </div>
    </>
  );
}
