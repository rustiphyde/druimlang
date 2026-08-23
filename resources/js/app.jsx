import React from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

function DruimCodeSample() {
    return (
        <pre>
            <code className="druim-code">
                <span className="syntax-boundary">:-:-:</span>
                {"\n\n"}
                <span className="syntax-structure">:{"{"}</span>
                {"\n"}
                {"    "}
                <span className="syntax-keyword">fn</span>
                {" "}
                <span className="syntax-function">hello</span>
                {" "}
                <span className="syntax-structure">:()(</span>
                {"\n"}
                {"        "}
                <span className="syntax-binding">name</span>
                {" "}
                <span className="syntax-operator">=</span>
                {" "}
                <span className="syntax-text">"World"</span>
                <span className="syntax-operator">;</span>
                {"\n"}
                {"        "}
                <span className="syntax-operator">|{">"}</span>
                {" ("}
                <span className="syntax-text">
                    "Hello :.name.:!"
                </span>
                {");"}
                {"\n"}
                {"    "}
                <span className="syntax-structure">):</span>
                {"\n\n"}
                {"    "}
                <span className="syntax-function">hello</span>
                {"();"}
                {"\n"}
                <span className="syntax-structure">{"}:"}</span>
                {"\n\n"}
                <span className="syntax-boundary">:-:-:</span>
            </code>
        </pre>
    );
}

function App() {
    return (
        <div className="site-shell">
            <header className="site-header">
                <a
                    href="/"
                    className="brand"
                    aria-label="Druim home"
                >
                    <img
                        src="/assets/Druim%20Logo%20Color.png"
                        alt="Druim"
                        className="brand-logo"
                    />
                </a>         


                <nav className="site-nav">
                    <a href="#language">Language</a>
                    <a href="#tooling">Tooling</a>
                    <a href="#install">Install</a>
                    <a href="#canon">Canon</a>
                    <a
                        href="https://github.com/rustiphyde/druim-lang"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <div className="hero-copy">
                        <p className="eyebrow">
                            Deterministic by design
                        </p>

                        <h1>Druim</h1>

                        <p className="hero-lead">
                            A deterministic, explicitly structured
                            programming language built around clear
                            syntax, intentional state, and
                            mechanically enforceable rules.
                        </p>

                        <div className="hero-actions">
                            <a
                                className="button button-primary"
                                href="#install"
                            >
                                Install Druim
                            </a>

                            <a
                                className="button button-secondary"
                                href="#canon"
                            >
                                Read the Canon
                            </a>
                        </div>
                    </div>

                    <div className="hero-code">
                        <div className="code-window">
                            <div className="code-header">
                                hello.drm
                            </div>

                            <DruimCodeSample />
                        </div>
                    </div>
                </section>

                <section
                    className="principles"
                    id="language"
                >
                    <div>
                        <span>01</span>
                        <h2>Explicit Structure</h2>
                        <p>
                            Druim favors visible structural syntax
                            over inferred behavior.
                        </p>
                    </div>

                    <div>
                        <span>02</span>
                        <h2>Deterministic Parsing</h2>
                        <p>
                            Every valid construct has one intended
                            structural interpretation.
                        </p>
                    </div>

                    <div>
                        <span>03</span>
                        <h2>Intentional State</h2>
                        <p>
                            Definition, mutation, copying, binding,
                            scope, and immutability remain distinct.
                        </p>
                    </div>

                    <div>
                        <span>04</span>
                        <h2>Source-Aware Diagnostics</h2>
                        <p>
                            Invalid programs fail explicitly with
                            diagnostics tied back to source.
                        </p>
                    </div>
                </section>

                <section className="language-glance">
                    <div className="section-heading">
                        <p className="eyebrow">
                            Language at a glance
                        </p>

                        <h2>
                            Explicit syntax for explicit intent.
                        </h2>

                        <p>
                            Druim keeps definition, mutation, scope,
                            traversal, collections, and conversion
                            structurally distinct.
                        </p>
                    </div>

                    <div className="glance-grid">
                        <article className="glance-card">
                            <div className="glance-card-header">
                                <span>Bindings</span>
                            </div>

                            <pre>
                                <code className="druim-code">
                                    <span className="syntax-binding">
                                        value
                                    </span>
                                    {" "}
                                    <span className="syntax-operator">
                                        =
                                    </span>
                                    {" "}
                                    <span className="syntax-number">
                                        10
                                    </span>
                                    <span className="syntax-operator">
                                        ;
                                    </span>
                                    {"\n"}
                                    <span className="syntax-binding">
                                        value
                                    </span>
                                    {" "}
                                    <span className="syntax-operator">
                                        {"<<"}
                                    </span>
                                    {" "}
                                    <span className="syntax-number">
                                        20
                                    </span>
                                    <span className="syntax-operator">
                                        ;
                                    </span>
                                </code>
                            </pre>
                        </article>

                        <article className="glance-card">
                            <div className="glance-card-header">
                                <span>Scope</span>
                            </div>

                            <pre>
                                <code className="druim-code">
                                    <span className="syntax-keyword">
                                        loc
                                    </span>
                                    {" "}
                                    <span className="syntax-binding">
                                        value
                                    </span>
                                    {" "}
                                    <span className="syntax-operator">
                                        =
                                    </span>
                                    {" "}
                                    <span className="syntax-number">
                                        10
                                    </span>
                                    <span className="syntax-operator">
                                        ;
                                    </span>
                                    {"\n"}
                                    <span className="syntax-keyword">
                                        glo
                                    </span>
                                    {" "}
                                    <span className="syntax-binding">
                                        value
                                    </span>
                                    {" "}
                                    <span className="syntax-operator">
                                        {"<<"}
                                    </span>
                                    {" "}
                                    <span className="syntax-number">
                                        20
                                    </span>
                                    <span className="syntax-operator">
                                        ;
                                    </span>
                                </code>
                            </pre>
                        </article>

                        <article className="glance-card">
                            <div className="glance-card-header">
                                <span>Collections</span>
                            </div>

                            <pre>
                                <code className="druim-code">
                                    <span className="syntax-binding">
                                        values
                                    </span>
                                    {" "}
                                    <span className="syntax-operator">
                                        =
                                    </span>
                                    {" "}
                                    <span className="syntax-structure">
                                        :[
                                    </span>
                                    <span className="syntax-number">
                                        10
                                    </span>
                                    {", "}
                                    <span className="syntax-number">
                                        20
                                    </span>
                                    <span className="syntax-structure">
                                        ]:
                                    </span>
                                    <span className="syntax-operator">
                                        ;
                                    </span>
                                </code>
                            </pre>
                        </article>

                        <article className="glance-card">
                            <div className="glance-card-header">
                                <span>Traversal</span>
                            </div>

                            <pre>
                                <code className="druim-code">
                                    <span className="syntax-binding">
                                        player
                                    </span>
                                    <span className="syntax-operator">
                                        ::
                                    </span>
                                    <span className="syntax-binding">
                                        inventory
                                    </span>
                                    <span className="syntax-operator">
                                        ::
                                    </span>
                                    <span className="syntax-structure">
                                        [0]
                                    </span>
                                </code>
                            </pre>
                        </article>

                        <article className="glance-card">
                            <div className="glance-card-header">
                                <span>Conversions</span>
                            </div>

                            <pre>
                                <code className="druim-code">
                                    <span className="syntax-keyword">
                                        num
                                    </span>
                                    {"("}
                                    <span className="syntax-text">
                                        "12"
                                    </span>
                                    {")"}
                                    {"\n"}
                                    <span className="syntax-keyword">
                                        flag
                                    </span>
                                    {"("}
                                    <span className="syntax-binding">
                                        values
                                    </span>
                                    {")"}
                                </code>
                            </pre>
                        </article>

                        <article className="glance-card">
                            <div className="glance-card-header">
                                <span>Functions</span>
                            </div>

                            <pre>
                                <code className="druim-code">
                                    <span className="syntax-keyword">
                                        fn
                                    </span>
                                    {" "}
                                    <span className="syntax-function">
                                        double
                                    </span>
                                    {" "}
                                    <span className="syntax-structure">
                                        :(value)(
                                    </span>
                                    {"\n"}
                                    {"    "}
                                    <span className="syntax-keyword">
                                        ret
                                    </span>
                                    {" "}
                                    <span className="syntax-binding">
                                        value
                                    </span>
                                    {" "}
                                    <span className="syntax-operator">
                                        *
                                    </span>
                                    {" "}
                                    <span className="syntax-number">
                                        2
                                    </span>
                                    <span className="syntax-operator">
                                        ;
                                    </span>
                                    {"\n"}
                                    <span className="syntax-structure">
                                        ):
                                    </span>
                                </code>
                            </pre>
                        </article>
                    </div>
                </section>

                <section
                    className="tooling-section"
                    id="tooling"
                >
                    <div className="tooling-copy">
                        <p className="eyebrow">
                            Tooling
                        </p>

                        <h2>
                            Built to be used,
                            not just specified.
                        </h2>

                        <p>
                            Druim includes command-line execution,
                            source-aware diagnostics, and dedicated
                            Visual Studio Code language support.
                        </p>

                        <div className="tooling-actions">
                            <a
                                href="#install"
                                className="button button-primary"
                            >
                                Install Druim
                            </a>

                            <a
                                href="https://github.com/rustiphyde/druim-lang"
                                className="button button-secondary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>

                    <div className="tooling-terminal">
                        <div className="terminal-header">
                            <span className="terminal-title">
                                Terminal
                            </span>
                        </div>

                        <pre>
                            <code>
                                <span className="terminal-prompt">
                                    $
                                </span>
                                {" druim hello.drm"}
                                {"\n\n"}
                                <span className="terminal-output">
                                    Hello, Druim
                                </span>
                            </code>
                        </pre>
                    </div>
                </section>

                <section
                    className="install-section"
                    id="install"
                >
                    <div className="section-heading">
                        <p className="eyebrow">
                            Install Druim
                        </p>

                        <h2>
                            Install Druim on Windows.
                        </h2>

                        <p>
                            Install the Druim command-line tool directly from
                            druimlang.com.
                        </p>
                    </div>

                    <div className="install-grid">
                        <article className="install-card">
                            <span className="install-step">
                                01
                            </span>

                            <h3>
                                Install Druim
                            </h3>

                            <p>
                                Run the installer in PowerShell. Druim is installed
                                to your user profile and added to your PATH.
                            </p>

                            <div className="install-command">
                                <code>
                                    irm https://druimlang.com/install.ps1 | iex
                                </code>
                            </div>
                        </article>

                        <article className="install-card">
                            <span className="install-step">
                                02
                            </span>

                            <h3>
                                Verify the install
                            </h3>

                            <p>
                                Confirm that the Druim executable is available from
                                your terminal.
                            </p>

                            <div className="install-command">
                                <code>
                                    druim --version
                                </code>
                            </div>
                        </article>

                        <article className="install-card">
                            <span className="install-step">
                                03
                            </span>

                            <h3>
                                Run Druim
                            </h3>

                            <p>
                                Execute any complete Druim source file using the
                                <code>.drm</code> extension.
                            </p>

                            <div className="install-command">
                                <code>
                                    druim hello.drm
                                </code>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
}

createRoot(
    document.getElementById('app')
).render(<App />);