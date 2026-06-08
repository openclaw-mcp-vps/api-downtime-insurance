export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          API Monitoring + SLA Claims
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Get paid when third-party<br />
          <span className="text-[#58a6ff]">APIs go down</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Automatically monitor your critical API dependencies, detect SLA breaches, and file compensation claims — so you recover costs without the manual work.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Monitoring — $19/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: '📡', title: 'Uptime Monitoring', desc: 'Check your APIs every minute and log every outage with timestamps.' },
          { icon: '⚠️', title: 'SLA Breach Detection', desc: 'Automatically compare downtime against vendor SLA commitments.' },
          { icon: '💰', title: 'Claim Filing', desc: 'Generate pre-filled claim reports to send vendors and recover credits.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Monitor up to 20 API endpoints',
              '1-minute check intervals',
              'Automatic SLA breach detection',
              'Claim report generation',
              'Webhook & email alerts',
              'Compensation tracking dashboard'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does SLA breach detection work?',
              a: 'You enter the uptime SLA percentage from your vendor contract (e.g. 99.9%). We track actual uptime and alert you the moment cumulative downtime exceeds what the SLA allows for the billing period.'
            },
            {
              q: 'Do I need to file claims manually?',
              a: 'No. When a breach is detected, we generate a pre-filled claim report with timestamps, duration, and the credit amount owed per your SLA terms. You just send it to the vendor.'
            },
            {
              q: 'Which APIs can I monitor?',
              a: 'Any HTTP/HTTPS endpoint — Stripe, Twilio, SendGrid, AWS, or any custom API your product depends on. Just add the URL and we handle the rest.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} API Downtime Insurance. All rights reserved.
      </footer>
    </main>
  )
}
