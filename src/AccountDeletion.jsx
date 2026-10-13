import { ArrowLeft, Mail, ShieldCheck, Trash2 } from 'lucide-react'
import './AccountDeletion.css'

const supportEmail = 'jktaxi5027@gmail.com'
const requestSubject = encodeURIComponent('JK Taxi account deletion request')
const requestBody = encodeURIComponent(
  'Hello JK Taxi Support,\n\nI would like to request deletion of my JK Taxi account and associated personal data.\n\nPhone number registered with my account (include country code):\n\nPlease let me know if you need information to verify my request.\n\nThank you,',
)

export default function AccountDeletion() {
  return (
    <main className="deletion-page">
      <header className="deletion-header">
        <a className="deletion-brand" href="/" aria-label="JK Taxi home">
          <span className="deletion-brand__mark">JK</span>
          <span>Taxi</span>
        </a>
        <a className="deletion-back" href="/">
          <ArrowLeft size={17} aria-hidden="true" />
          Back to JK Taxi
        </a>
      </header>

      <article className="deletion-card">
        <div className="deletion-icon" aria-hidden="true"><Trash2 size={25} /></div>
        <p className="deletion-eyebrow">JK Taxi account support</p>
        <h1>Request account deletion</h1>
        <p className="deletion-intro">
          You can ask us to delete your JK Taxi account and its associated personal data at any time.
          You do not need to sign in to make a request.
        </p>

        <section className="deletion-section" aria-labelledby="request-heading">
          <h2 id="request-heading">How to request deletion</h2>
          <ol>
            <li>Contact JK Taxi Support using the button below or email <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</li>
            <li>Use the subject <strong>“JK Taxi account deletion request”</strong>.</li>
            <li>Include the phone number registered to your account, with its country code. We may ask for reasonable information to verify that you own the account.</li>
          </ol>
          <a
            className="deletion-button"
            href={`mailto:${supportEmail}?subject=${requestSubject}&body=${requestBody}`}
          >
            <Mail size={18} aria-hidden="true" />
            Email a deletion request
          </a>
          <p className="deletion-note">Sending the email submits a request; it does not delete your account immediately. We will confirm when the request has been processed.</p>
        </section>

        <section className="deletion-section" aria-labelledby="data-heading">
          <h2 id="data-heading">Data deletion and retention</h2>
          <p>
            After we verify your request, we will delete or de-identify personal data associated with
            your account that we no longer need. This may include your account profile and contact
            details, saved places, and other account-linked information.
          </p>
          <p>
            Some records, such as completed trip, payment, safety, or legal-compliance records, may
            need to be retained where required by law or for legitimate safety, dispute-resolution,
            or fraud-prevention purposes. Any retained information will be restricted to that purpose
            and kept only for the period required; it will then be deleted or de-identified.
          </p>
          <p>
            Contact <a href={`mailto:${supportEmail}`}>{supportEmail}</a> if you have questions about a deletion request or retained data.
          </p>
        </section>

        <aside className="deletion-privacy">
          <ShieldCheck size={19} aria-hidden="true" />
          <span>We use the account phone number only to locate the account and verify your deletion request.</span>
        </aside>
      </article>

      <footer className="deletion-footer">© 2026 JK Taxi · Tiruppur, Tamil Nadu, India</footer>
    </main>
  )
}
