import { Component, type ErrorInfo, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

type BoundaryProps = { children: ReactNode };
type BoundaryState = { hasError: boolean; message: string };

function showRuntimeFallback() {
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = `
    <main class="runtime-fallback" role="alert">
      <div class="runtime-fallback-card">
        <span class="runtime-fallback-label">BESMA KADDOUR</span>
        <h1>Software Engineer</h1>
        <p>The portfolio could not finish loading in this browser. Please open it in Chrome, Safari, or Firefox.</p>
        <button type="button" onclick="window.location.reload()">Reload portfolio</button>
      </div>
    </main>`;
}

class AppErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  state: BoundaryState = { hasError: false, message: "" };

  static getDerivedStateFromError(error: Error): BoundaryState {
    return { hasError: true, message: error?.message || "Unknown browser error" };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio application error", error, info);
    try {
      if (window.sessionStorage.getItem("besma-recovered") !== "1") {
        window.sessionStorage.setItem("besma-recovered", "1");
        window.location.replace(`${window.location.pathname}?recover=${Date.now()}`);
      }
    } catch {
      // If storage is unavailable, keep the readable fallback below.
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="runtime-fallback" role="alert">
          <div className="runtime-fallback-card">
            <span className="runtime-fallback-label">BESMA KADDOUR</span>
            <h1>Software Engineer</h1>
            <p>The portfolio is temporarily refreshing. Please reload the page.</p>
            <small style={{ display: "block", marginTop: 18, color: "#8f8998", fontSize: 11, wordBreak: "break-word" }}>{this.state.message}</small>
            <button type="button" onClick={() => window.location.reload()}>Reload portfolio</button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <AppErrorBoundary>
      <App />
    </AppErrorBoundary>,
  );
}
