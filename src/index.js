import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://c13dd7f6dd11ce18a2fe93769bea5327@o4505665641906176.ingest.sentry.io/4505686955786240",
  integrations: [new Sentry.BrowserTracing({}), new Sentry.Replay()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

// Import and init Sentry SDK

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);