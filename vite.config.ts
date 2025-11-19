import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiKey = env.RESEND_API_KEY;
  const toEmail = env.CONTACT_TO_EMAIL;

  return {
    plugins: [
      react(),
      {
        name: 'contact-api',
        configureServer(server) {
          server.middlewares.use('/api/contact', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end('Method Not Allowed');
              return;
            }

            let body = '';
            await new Promise<void>((resolve) => {
              req.on('data', (chunk) => { body += chunk; });
              req.on('end', () => resolve());
            });

            try {
              const data = JSON.parse(body);

              if (!apiKey || !toEmail) {
                res.statusCode = 500;
                res.end('Email service not configured');
                return;
              }

              const text = `Nome: ${data.name}\nEmail: ${data.email}\nTelefono: ${data.phone || ''}\n\nMessaggio:\n${data.message}`;
              const html = `
                <div style="background:#f9fafb;padding:24px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111827;">
                  <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
                    <div style="padding:20px 24px;border-bottom:1px solid #e5e7eb;">
                      <h1 style="margin:0;font-size:20px;line-height:28px;color:#0f172a;">Nuovo contatto</h1>
                      <p style="margin:4px 0 0;font-size:14px;color:#64748b;">Arizay Guerra</p>
                    </div>
                    <div style="padding:24px;">
                      <table style="width:100%;border-collapse:collapse;">
                        <tbody>
                          <tr>
                            <td style="padding:8px 0;width:140px;color:#6b7280;">Nome</td>
                            <td style="padding:8px 0;color:#111827;">${data.name}</td>
                          </tr>
                          <tr>
                            <td style="padding:8px 0;width:140px;color:#6b7280;">Email</td>
                            <td style="padding:8px 0;color:#111827;">${data.email}</td>
                          </tr>
                          <tr>
                            <td style="padding:8px 0;width:140px;color:#6b7280;">Telefono</td>
                            <td style="padding:8px 0;color:#111827;">${data.phone || ''}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div style="margin-top:16px;padding:16px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;">
                        <div style="font-size:14px;color:#374151;margin-bottom:8px;">Messaggio</div>
                        <div style="white-space:pre-wrap;font-size:16px;color:#111827;">${data.message}</div>
                      </div>
                    </div>
                  </div>
                </div>
              `;

              const r = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                  'Authorization': `Bearer ${apiKey}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  from: 'Arizay Guerra <onboarding@resend.dev>',
                  to: [toEmail],
                  subject: `Nuovo contatto da ${data.name}`,
                  reply_to: data.email,
                  text,
                  html,
                }),
              });

              if (!r.ok) {
                res.statusCode = 502;
                res.end('Email send failed');
                return;
              }

              res.statusCode = 200;
              res.end('OK');
            } catch {
              res.statusCode = 400;
              res.end('Bad Request');
            }
          });
        },
      },
    ],
  };
});
