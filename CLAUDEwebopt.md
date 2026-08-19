# Universal Website Build Standards

These instructions govern website work in this repository. Apply them to new builds, redesigns, migrations, feature work, and optimization. They are defaults, not a substitute for project evidence. Adapt implementation to the actual business, audience, content, stack, hosting, risk, and constraints.

## Operating principles

1. **Understand before changing.** Audit the current stack, architecture, routes, content model, build/deploy path, integrations, analytics, and existing behavior before editing code.
2. **Serve users first.** Build for clarity, usefulness, accessibility, trust, and task completion. Never game search, Lighthouse, or conversion metrics at the expense of users.
3. **Measure, diagnose, improve.** Establish a baseline, identify the cause of a failure, make the smallest effective change, and retest under the same conditions.
4. **Preserve what works.** Do not replace the framework, routing model, design system, content system, or dependencies without evidence that the change is necessary and proportionate.
5. **Use progressive enhancement.** Core content, navigation, and critical actions should remain available when JavaScript is slow, delayed, or unavailable whenever the product permits.
6. **Prefer standards and simplicity.** Use semantic HTML and native browser behavior before adding custom components or client-side libraries.
7. **Do not invent facts.** Never fabricate testimonials, ratings, credentials, addresses, prices, policies, authors, dates, availability, or structured data. Mark unresolved content clearly.
8. **Protect existing value.** Preserve working URLs, search equity, analytics continuity, accessibility, user data, and conversion paths during changes.
9. **Verify, do not assume.** A successful build is not proof that routes, metadata, forms, redirects, tracking, or responsive layouts work.
10. **Report evidence honestly.** Distinguish measured results from targets, lab data from field data, and verified behavior from items that require production access.
11. **Treat visual evidence as requirements.** When the user supplies screenshots, mockups, design files, or brand assets, inspect and compare against them directly; do not substitute remembered conventions or a generic design style.

## Instruction priority and exceptions

- Follow explicit project requirements, legal requirements, and platform constraints first.
- Treat the measurable targets in this file as default quality gates. If a target is inappropriate or blocked, document the reason, measured result, user impact, and recommended follow-up. Do not silently weaken it.
- Do not remove meaningful content, accessibility features, security controls, consent controls, or necessary functionality merely to improve a score.
- Do not add SEO text, hidden content, fake urgency, forced popups, or misleading interface patterns merely to improve ranking or conversion.

## Required workflow

### 1. Audit the project before implementation

Inspect relevant files and runtime behavior. Determine:

- site purpose, primary audience, primary conversion, and critical user journeys;
- framework, versions, rendering mode, router, bundler, package manager, CMS, and design system;
- hosting/runtime, CDN, caching, redirects, headers, environment variables, and deployment commands;
- route inventory and which routes are public, indexable, authenticated, dynamic, localized, paginated, or generated;
- content ownership, source of truth, update frequency, and missing or placeholder content;
- existing SEO metadata, canonicals, robots directives, sitemap, structured data, social previews, and redirect rules;
- current accessibility, responsive behavior, browser support, and form behavior;
- supplied reference images, design files, and approved brand assets, plus the repository locations and variants of logos, wordmarks, icons, favicons, fonts, and imagery;
- third-party scripts, fonts, images, embeds, consent tooling, analytics, ads, chat, and tag managers;
- baseline build/test/lint results, bundle sizes, Lighthouse-style results, and field data when available;
- existing user changes and unrelated defects that must not be overwritten.

Use the repository's established commands and conventions. Read configuration before introducing new tools. For an existing site, capture before/after measurements for representative pages and flows.

### 2. Define the acceptance plan

Before substantial work, identify:

- representative route types to test, including the homepage, a high-traffic content/detail page, a listing/search page, and a conversion route when present;
- expected metadata and indexation state for each route type;
- supported viewport range, browsers, devices, languages, and input modes;
- performance budgets and quality targets;
- critical conversions and the analytics events used to measure them;
- risks such as a URL migration, CMS limitations, authentication, third parties, or user-generated content.

When the user has not supplied these details, infer conservative defaults from the project and state material assumptions in the handoff.

### 3. Implement in small, verifiable increments

- Prefer focused changes that preserve current behavior.
- Run the narrowest relevant checks after each meaningful change.
- Recheck affected routes, not only the page visible during development.
- Do not leave disabled tests, unexplained suppressions, debug output, placeholder links, sample secrets, or dead code.

### 4. Audit and remediate after the build

Repeat this loop until the acceptance plan passes or a documented constraint remains:

1. Build and serve the production output.
2. Measure representative routes under consistent mobile and desktop conditions.
3. Review the trace, request waterfall, coverage, bundle output, DOM, console, and network failures.
4. Classify each failure by root cause rather than by audit label alone.
5. Prioritize the largest user impact and the critical path.
6. Apply one coherent set of fixes.
7. Rebuild and retest under the same conditions.
8. Compare before/after metrics and check for regressions.
9. Record remaining risks, environmental limits, and production-only verification.

### 5. Perform visual QA with an explicit screenshot loop

For frontend implementation, redesign, reference reproduction, or any change that can affect presentation, screenshots are a required verification artifact when the environment supports them. A passing build, DOM inspection, or component preview does not replace rendered-page review.

1. Start the project with its established command and serve the production build or the closest production-like build on `localhost`. Use `file://` only for an explicitly self-contained artifact that has no local server workflow.
2. Verify that each target route opens directly by its localhost URL and still works after refresh. Wait for the intended fonts, images, data, and hydration to settle; do not capture a loading screen, development overlay, error boundary, or broken route as the result.
3. Capture every changed route plus representative route types at a consistent desktop viewport and a consistent mobile viewport. Add intermediate widths and important states when the layout or interaction warrants them.
4. Inspect the screenshots at full-page and critical-section scale. Check composition, hierarchy, typography, line wrapping, spacing, alignment, colors, contrast, borders, radii, shadows, image sizing/cropping, responsive reflow, overflow, clipping, sticky/fixed elements, and unintended blank space.
5. Exercise and inspect relevant interaction states: hover, focus-visible, active/current, open menus and dialogs, disabled, loading, empty, validation error, server error, and success. Keyboard focus and mobile navigation must be visibly usable.
6. When reference images exist, compare at the same viewport and page state using side-by-side review, overlays, or image diffs when available. Identify concrete mismatches rather than relying on a general impression.
7. Fix root causes, then recapture the same routes, viewports, and states. Complete at least two full screenshot -> inspect -> fix -> rescreenshot rounds for substantive visual work, and continue until no material mismatch or defect remains.
8. Review the final round for regressions on unaffected shared layouts and record any intentional deviations, unsupported checks, or environment limitations in the handoff.

Do not claim visual fidelity from code inspection alone. If screenshot tooling or a runnable local environment is unavailable, say exactly what could not be verified and provide the commands, routes, viewports, and states needed for follow-up.

### Reference-image fidelity

- Treat a supplied reference as the source of truth for visible composition unless the user explicitly asks for reinterpretation or it conflicts with accessibility, content, or platform requirements.
- Inspect the actual reference before implementation. Derive its layout regions, proportions, alignment, type scale, spacing rhythm, colors, borders, radii, shadows, imagery, crop, and responsive implications from visual evidence.
- Reproduce structure and relationships, not merely the subject matter. Do not replace distinctive elements with approximate icons, emoji, arbitrary stock imagery, invented decoration, or generic components.
- Match the reference at its known or inferred viewport first, then create intentional responsive behavior that preserves its hierarchy and usability at other widths.
- Never distort an asset to force a match. Preserve its aspect ratio and choose the correct crop, object position, resolution, and light/dark or transparent variant.
- When content in the reference is unreadable or missing, use project-provided content or clearly marked placeholders; do not invent factual marketing claims.

### Brand asset checks

- Before drawing or inventing brand elements, search the repository's public, static, asset, image, icon, and font locations and inspect likely files visually when names are ambiguous.
- Prefer the approved existing logo, wordmark, mark, icon, font, palette, and photography. Do not recreate a logo with plain text, substitute a generic icon, or recolor a protected asset without an explicit requirement.
- Check for light, dark, monochrome, compact, horizontal, transparent, high-resolution, favicon, and social-preview variants and use the variant intended for the surface.
- Preserve safe space, legibility, aspect ratio, transparency, and minimum rendered size. Verify assets on every background and breakpoint where they appear.
- Confirm that favicon, application icons, Open Graph/Twitter images, organization schema references, and visible site identity use the correct production assets and absolute production URLs where required.

### Frontend design skill

- For new frontend work or a substantial visual redesign, invoke the `frontend-design` skill before implementation when it is installed and permitted by the environment. Read its current instructions and apply them together with this file and the project's own design system.
- The skill does not override user requirements, reference-image fidelity, brand standards, accessibility, performance budgets, or established project conventions.
- If the skill is unavailable, continue with the same evidence-driven design and visual-QA workflow and note the unavailable capability only when it materially limits the result.

### Anti-generic design guardrails

- Derive a clear visual direction from the brand, audience, content, and task. Do not default to the visual language of a generic SaaS landing page.
- Avoid formulaic combinations such as an oversized centered hero, floating gradient orbs, glass panels, pill-shaped labels, a three-card feature row, arbitrary statistics, and blue-purple gradients unless the project evidence supports them.
- Do not put every piece of content in a card, give every element the same rounded rectangle, or use shadows and gradients as substitutes for hierarchy.
- Establish deliberate typography, color, spacing, grid, radius, border, elevation, and motion systems. Reuse them consistently while allowing meaningful emphasis and variation.
- Prefer specific, content-led composition and real brand assets over filler decoration. Every visual effect must serve hierarchy, comprehension, brand expression, or interaction feedback.
- Preserve personality without sacrificing legibility, accessibility, responsive behavior, performance, or conversion clarity.

## Architecture and stack adaptation

Choose architecture from the site's needs. Do not force every website into the same shape.

### Single-file versus production architecture

- A single HTML file with inline CSS or scripts is acceptable for a disposable prototype, isolated demo, email-like artifact, or explicitly requested self-contained handoff.
- Do **not** use Tailwind's browser CDN, runtime CSS generation, development-only transpilers, or large inline style/script blocks as the default for a production site.
- For a multi-page production site, prefer shared, minified, content-hashed, cacheable CSS and JavaScript assets. Inline only small, measured critical fragments when they improve rendering and do not create maintenance, CSP, or caching problems.
- Keep route-specific code and CSS split when it reduces initial cost without creating excessive requests or duplication.
- A simple production marketing site may use static HTML/CSS with minimal JavaScript. It does not require a JavaScript framework.

### Rendering strategy

- Prefer static generation for stable public content and server rendering for public dynamic content when practical.
- Public indexable content must be present in the initial or reliably server-rendered HTML whenever the stack supports it. Do not require user interaction to reveal essential crawlable content.
- If a client-rendered SPA is required, verify rendered HTML, unique metadata, status behavior, canonical URLs, internal links, and direct navigation on every public route. Add SSR or prerendering when reliable indexing and social previews cannot otherwise be guaranteed.
- Use client components only where interactivity requires them. Keep data fetching, content transformation, and noninteractive rendering on the server or at build time when beneficial.

### Framework-aware rules

- **Next.js/React server frameworks:** use built-in metadata, image, font, script, caching, and route features where they produce correct output. Minimize client boundaries and hydration. Confirm framework defaults rather than assuming they are optimal.
- **React/Vite and other SPAs:** code-split by route and expensive feature; avoid shipping the entire app to every route. Prerender or server-render indexable routes when SEO matters.
- **Astro and similar island frameworks:** keep components server-rendered by default and hydrate only interactive islands with the least eager directive that preserves UX.
- **Static HTML:** use shared assets, includes/templates, or a static generator when duplication makes metadata and navigation error-prone.
- **WordPress:** use a child theme or maintainable custom theme, minimize plugins/builders, optimize queries and autoloaded data, use full-page/object caching when appropriate, and test changes with real content. Never edit vendor/core files.
- **Shopify:** preserve platform semantics and checkout constraints, minimize app and theme script cost, use responsive Shopify image transforms, and test product variants, cart, markets, and consent behavior.
- **Other CMS or commerce platforms:** use native caching, image, localization, SEO, and extension mechanisms before custom replacements. Respect editor workflows.

## Semantic HTML and content structure

- Use one clear page topic and a descriptive visible heading. Heading levels must reflect document structure; do not choose headings for visual size.
- Use `header`, `nav`, `main`, `article`, `section`, `aside`, and `footer` when their semantics apply. Every page needs one primary `main` region.
- Use links for navigation and buttons for actions. Do not use clickable `div` or `span` elements.
- Use real lists, tables, figures, quotes, labels, and disclosure elements where appropriate. Add table captions and header associations for data tables.
- Keep important copy as text, not baked into images. Images of text are allowed only when essential to the content and must have an accessible equivalent.
- Make link text meaningful out of context. Avoid repeated vague text such as "click here."
- Preserve a logical DOM and reading order across responsive layouts.
- Set the document language and mark passages in another language where needed.
- For dates, times, prices, units, and addresses, use unambiguous human-readable formats and machine-readable semantics when appropriate.
- Write useful, original, accurate content for the audience and search intent. Do not pad pages to a word count or repeat keywords unnaturally.

## Google SEO and search discoverability

SEO improves discovery and understanding; it cannot guarantee ranking or indexation.

### Crawl and indexation

- Every public page intended for search must return a meaningful `200` response, be reachable through crawlable `<a href>` links, and expose its essential content without requiring a click, search, or client-only state.
- Use `robots.txt` to control crawling, not as a reliable way to prevent indexing. Use authentication or a `noindex` directive for content that must not appear in search, and ensure crawlers can access a `noindex` page long enough to see the directive.
- Never ship staging, preview, internal search, cart, account, or private URLs as indexable by accident.
- Do not block CSS, JavaScript, images, or other resources required to understand indexable pages.
- Generate an XML sitemap for canonical, indexable URLs only. Use absolute production URLs, exclude redirects/errors/noindex pages, update it with content, split it when platform limits require, and reference it from `robots.txt` when appropriate.
- Verify HTTP status codes and rendered output for direct requests. A custom error screen served with `200` is a soft 404 and must be fixed.
- For JavaScript sites, test the rendered DOM and direct-load behavior, not just in-app navigation.

### URLs, canonicals, redirects, and internationalization

- Use stable, readable, lowercase URLs with words and minimal parameters. Do not change established URLs merely for aesthetics.
- Emit one absolute, self-referential canonical for each canonical HTML page. Canonicals, internal links, sitemap entries, redirects, protocol, hostname, and trailing-slash policy must agree.
- Do not canonicalize materially different pages to one page, use `noindex` as a substitute for canonicalization, or use `robots.txt` for canonicalization.
- Redirect retired or moved URLs to the closest relevant replacement with a server-side permanent `301` or `308`. Avoid chains, loops, mass redirects to the homepage, and client-side or meta-refresh redirects when server redirects are available.
- Preserve path/query values needed for campaigns or application behavior while preventing duplicate indexable URL variants.
- Use `404` for missing pages and `410` when content is intentionally and permanently gone and that distinction is useful.
- For localized equivalents, use valid reciprocal `hreflang` annotations, include a self-reference, use appropriate language/region codes, and point each annotation to a canonical page in that language. Do not auto-redirect solely from inferred language in a way that blocks access.

### Page-level search metadata

Every indexable route must have metadata derived from its actual content:

- a unique, concise, descriptive `<title>` without keyword stuffing or misleading boilerplate;
- a unique, useful meta description that summarizes the page and supports the searcher's decision;
- a correct canonical URL;
- an appropriate robots directive;
- a single clear primary visual/page title;
- Open Graph and other required social metadata, including a tested absolute preview image URL;
- a valid favicon and site identity assets.

Do not rely on guessed character limits as guarantees; search presentation varies by query and device. Prioritize accuracy, uniqueness, and clarity. Prevent empty, duplicate, placeholder, environment-specific, or `[object Object]` metadata.

### Content and internal linking

- Match each indexable page to a distinct user need. Avoid thin doorway pages, near-duplicate location pages, or programmatic pages without unique value.
- Put the answer and primary value where users can find it quickly. Support important claims with evidence, sources, authorship, or first-hand detail when relevant.
- Keep content current. Show accurate published/updated dates only when the dates are meaningful and maintained.
- Link related pages through useful in-context links and navigational hierarchies. Important pages must not be orphaned.
- Use descriptive image filenames and contextual alternative text. Decorative images need empty alt text.
- For local businesses, keep business name, address, phone, hours, service area, and map/profile links accurate and consistent. Do not invent or mark up locations.
- For products, articles, jobs, recipes, events, video, user-generated content, subscriptions, and other specialized content, apply the relevant current Google guidance rather than generic markup.

### Structured data

- Add structured data only when it accurately represents visible page content and the type is supported and useful.
- Prefer valid JSON-LD unless the platform has a reliable native format.
- Use stable canonical identifiers and connect related entities consistently.
- Never add fake reviews, aggregate ratings, prices, availability, authors, FAQs, organization claims, or other properties.
- Do not mark up hidden or unrelated content. Do not assume valid markup guarantees a rich result.
- Avoid duplicate or conflicting schema emitted by themes, plugins, apps, and custom code.
- Validate syntax and feature eligibility with Schema.org tooling and Google's Rich Results Test when the type is supported. Revalidate rendered production pages.

### Search migration protection

For redesigns, domain changes, protocol changes, or URL migrations:

- crawl and export the old URL inventory before launch;
- create a one-to-one redirect map where relevant content exists;
- preserve valuable content, metadata, internal links, and structured data unless deliberately improved;
- update canonicals, sitemaps, `hreflang`, asset URLs, analytics, feeds, and external profiles;
- prevent staging URLs and temporary canonicals from reaching production;
- monitor crawl errors, indexation, rankings, traffic, and conversion after launch;
- keep redirects in place long enough for users, search engines, and external links; do not remove them casually.

## Performance and Core Web Vitals

Performance is a user experience requirement. Test the production build; development mode is not representative.

### Default measurable targets

Use field data at the 75th percentile, segmented by mobile and desktop, as the source of truth when sufficient data exists:

| Metric | Default target |
|---|---:|
| Largest Contentful Paint (LCP) | `<= 2.5 s` |
| Interaction to Next Paint (INP) | `<= 200 ms` |
| Cumulative Layout Shift (CLS) | `<= 0.10` |

Use lab tests for development and regression detection. Lighthouse cannot measure field INP; use Total Blocking Time and interaction traces as diagnostic proxies. Default lab gates for representative production routes are:

| Check | Default target |
|---|---:|
| Lighthouse Performance, mobile | `>= 90` |
| Lighthouse Accessibility | `>= 95`, with no known critical violations |
| Lighthouse Best Practices | `>= 95` |
| Lighthouse SEO | `>= 95` |
| Total Blocking Time | `<= 200 ms` |
| Speed Index | `<= 3.4 s` |

Scores fluctuate. Run at least three comparable tests when making performance claims and use the median; investigate wide variance. A green category score does not override failing field data or a broken user journey.

### Default transfer and execution budgets

Set route-specific budgets after measuring the product. Until then, use these compressed-transfer starting limits for a typical public content or marketing route on first visit:

| Resource | Starting budget |
|---|---:|
| Initial first-party JavaScript | `<= 150 KB` |
| Initial total JavaScript, including required third parties | `<= 200 KB` |
| Initial CSS | `<= 80 KB` |
| HTML document | `<= 50 KB` |
| Critical fonts | `<= 100 KB` |
| LCP image | `<= 250 KB` |
| Total initial page transfer | `<= 1 MB` |
| Third-party origins on critical path | `0` preferred; each must be justified |

These are starting gates, not permission to fill the budget. Simple static pages should be substantially smaller. Media, maps, editors, dashboards, and commerce may require different budgets; defer optional cost until requested, isolate it from the critical path, and document the tradeoff. Track uncompressed and compressed bundle sizes where both are relevant.

### Diagnose by cause

Do not apply a generic optimization checklist blindly.

**For poor LCP, break the metric into:**

- Time to First Byte: hosting latency, redirects, cache misses, slow database/API work, middleware, or server rendering;
- resource discovery delay: an LCP asset hidden in CSS/JavaScript, client-only rendering, missing priority, or late data;
- resource load duration: oversized media, slow origin, missing CDN/cache, or competing requests;
- element render delay: render-blocking CSS/fonts, hydration, long main-thread work, or animations.

Fix the dominant phase. Do not preload an image that is already discovered early or lazy-load the LCP element.

**For poor INP or high TBT, inspect:**

- long tasks, excessive hydration, large bundles, parse/compile cost, expensive handlers, layout thrashing, and synchronous third parties;
- interaction start, processing time, and presentation delay;
- low-end device behavior and real interactions, not only initial load.

Split long work, reduce client code, yield appropriately, avoid unnecessary rerenders, virtualize only when needed, and move suitable work off the main thread. Do not add workers or memoization without evidence.

**For poor CLS, inspect:**

- images, video, ads, embeds, banners, and components without reserved space;
- injected content above existing content;
- font swaps and fallback metric mismatch;
- transitions or animations that trigger layout;
- responsive components that change height after hydration.

Reserve space, use stable placeholders, and animate transforms/opacity when appropriate. Do not hide instability from measurement while leaving it visible to users.

### Images and media

- Use the right asset: SVG for appropriate vectors/icons, and modern raster formats such as AVIF or WebP when they provide a real size benefit and compatibility is handled.
- Generate responsive widths and use `srcset`/`sizes` or the framework image component correctly. Do not send a desktop-size image to a small screen.
- Set intrinsic `width` and `height` or `aspect-ratio` to reserve layout space.
- Compress to the lowest size that preserves acceptable visual quality for the rendered dimensions and density.
- Do not lazy-load the LCP/hero image. Give the true LCP resource appropriate priority and preload only when discovery would otherwise be late.
- Lazy-load below-the-fold images and iframes, but avoid lazy-loading content just below the fold so aggressively that normal scrolling exposes blanks.
- Use descriptive alt text for informative images and `alt=""` for decorative images. Do not repeat nearby text mechanically.
- Provide captions, transcripts, posters, and controls for audio/video as appropriate. Avoid autoplay with sound.
- Defer heavy galleries, maps, video players, and embeds behind useful lightweight previews when that preserves the task.

### Fonts

- Prefer system fonts when brand requirements do not justify web fonts.
- Minimize families, weights, styles, subsets, and file formats. Variable fonts are useful only when their actual delivered range is smaller than alternatives.
- Self-host when it improves privacy, control, and performance and licensing permits it.
- Preload only fonts required for initial above-the-fold text, with matching `crossorigin` and MIME behavior. Excess preloads compete with more important resources.
- Use an appropriate `font-display` strategy and compatible fallbacks. Tune fallback metrics when font swap causes layout shift.
- Subset by language carefully; never remove glyphs required by actual content or user input.

### JavaScript

- Ship no JavaScript for content that HTML and CSS can provide.
- Remove unused dependencies, duplicate libraries, obsolete polyfills, dead code, and accidental server code from client bundles.
- Split by route and expensive feature. Dynamically load noncritical editors, maps, charts, media players, and authenticated tools.
- Use `defer`, modules, or framework-native loading strategies for noncritical scripts. Use `async` only when execution order is irrelevant.
- Keep server-only secrets and packages out of browser bundles.
- Limit hydration to interactive areas and avoid global state or rerenders for static content.
- Treat third-party scripts as product dependencies with an owner, purpose, consent category, performance cost, failure behavior, and removal plan.
- Do not delay essential accessibility or core conversion behavior solely to improve a synthetic score.

### CSS and rendering

- Use shared, minified, cacheable production CSS for multi-page sites. Keep the cascade predictable and eliminate unused framework output where safe.
- Inline only small measured critical CSS; avoid duplicating the full stylesheet in every document.
- Avoid runtime CSS generation for normal production pages when build-time extraction is available.
- Prevent render-blocking imports and long dependency chains. Load noncritical styles without causing flashes or inaccessible unstyled controls.
- Prefer CSS layout and animation over script. Animate `transform` and `opacity` where they meet the design need.
- Use containment/content visibility only after verifying accessibility, search rendering, anchor navigation, find-in-page, and layout behavior.

### Network, server, and caching

- Eliminate redirect chains and unnecessary origin connections on critical navigation.
- Serve compressed text assets with Brotli or gzip and correct content types.
- Use long-lived immutable caching for content-hashed static assets. Use deliberate shorter or revalidated caching for HTML and mutable data.
- Use a CDN where audience geography and hosting make it beneficial. Confirm it does not cache personalized or private responses.
- Optimize database queries, API waterfalls, server rendering, and cache keys before masking slow origins with client loaders.
- Use `preconnect`, DNS prefetch, preload, prefetch, or speculation only for measured likely needs. Too many hints waste bandwidth and priority.
- Use HTTP/2 or HTTP/3 when supported, but do not assume protocol choice fixes oversized assets or excessive requests.

## Accessibility

Target WCAG 2.2 Level AA unless the project specifies a stricter standard. Automated checks are necessary but insufficient.

- All functionality must work by keyboard alone with logical focus order, visible focus, no traps, and focus that is not obscured by sticky UI.
- Provide a skip link and appropriate landmarks. Manage focus when dialogs, drawers, route transitions, validation summaries, or other context changes require it.
- Use native accessible controls first. If a custom widget is necessary, implement the applicable ARIA pattern completely, including name, role, value, state, focus, and keyboard interaction.
- Every control needs an accessible name. Form fields need persistent programmatic labels; placeholders are not labels.
- Maintain at least required text and non-text contrast in all states. Do not rely on color alone.
- Support text zoom/reflow and browser zoom without clipped content or loss of function.
- Respect `prefers-reduced-motion`; avoid flashing and unnecessary motion. Provide pause/stop controls for moving or auto-updating content when required.
- Ensure touch/pointer targets meet WCAG 2.2 minimums and provide comfortable spacing; do not rely only on dragging or hover.
- Provide text alternatives, captions, audio descriptions, and transcripts as required by the media and context.
- Announce dynamic statuses and errors without stealing focus unnecessarily.
- Give pages descriptive titles and links/controls clear names. Keep repeated navigation and help locations consistent.
- Authentication must support password managers and paste. Do not require memory, transcription, puzzles, or redundant re-entry when an accessible alternative is required.
- Test keyboard, screen-reader semantics, 200%/400% zoom or reflow as applicable, forced colors/high contrast where relevant, reduced motion, and common input modes.

## Responsive, device, and browser quality

- Design mobile-first when appropriate, but test the full range rather than only named device widths.
- Support at minimum narrow mobile (`320px` CSS width when the product audience requires it), common mobile, tablet/intermediate, laptop, and wide desktop layouts.
- Test content-driven breakpoints immediately before and after layout changes. Do not choose breakpoints only from popular device models.
- Check horizontal overflow, long words/URLs, localization expansion, browser text sizing, safe areas, sticky elements, virtual keyboards, landscape, and dynamic mobile viewport height.
- Keep readable line length, scalable typography, adequate spacing, and content hierarchy. Do not shrink essential content until it technically fits.
- Ensure navigation, menus, dialogs, tables, carousels, media, and forms remain operable with touch, keyboard, pointer, and zoom.
- Use feature detection and progressive enhancement. Do not rely on user-agent sniffing when capability detection works.
- Test the project's supported current browsers and representative engines: Chromium, WebKit/Safari, and Firefox unless scope says otherwise. Include relevant iOS Safari and Android behavior for public sites.
- Verify on at least one real or remotely hosted mobile device when hardware, viewport, input, media, camera, payments, or Safari behavior is material.
- Provide sensible fallbacks for unsupported enhancement features. Document the actual browser support policy.

## UX and conversion

- Identify one primary goal for each page and make its next step clear without blocking access to information.
- Preserve familiar navigation, descriptive labels, predictable control behavior, and clear information hierarchy.
- Make trust information—identity, contact details, pricing terms, delivery/returns, privacy, security, and support—easy to find when relevant.
- Reduce unnecessary steps and fields. Preserve user input across recoverable failures.
- Do not use dark patterns, false scarcity, disguised ads, confirm-shaming, obstructive interstitials, or difficult cancellation.
- Modals, banners, chat widgets, and sticky calls to action must not obscure content, focus, errors, or mobile controls.
- Empty, loading, success, error, permission-denied, offline, and no-results states must tell the user what happened and what to do next.
- Use meaningful microcopy. A call to action should describe the outcome, not merely say "Submit."
- Conversion experiments must protect accessibility, performance, privacy, and statistical integrity. Do not declare a winner without sufficient data.

## Forms

- Use the correct input type, `name`, label, autocomplete token, input mode, and constraints. Group related controls with `fieldset` and `legend`.
- Validate on the server regardless of client validation. Client validation should improve feedback, not become the only protection.
- Validate at a humane time. Do not show errors before the user has had a reasonable chance to answer.
- Provide a clear error summary for long forms and specific inline messages associated with fields. Move focus appropriately after failed submission.
- Preserve valid input after errors and prevent accidental duplicate submissions without trapping intentional retries.
- Show a reliable loading/progress state and an explicit success state. Do not clear the form until success is confirmed.
- Make network failures recoverable and distinguish them from validation failures.
- Use CSRF protection, rate limiting, bot/spam defenses, safe file validation, and abuse monitoring appropriate to risk. Choose anti-bot tools that do not create inaccessible barriers.
- Do not log secrets or unnecessarily sensitive form values. Encrypt transport and minimize collection/retention.
- Test keyboard completion, autofill, password managers, mobile keyboards, screen readers, slow connections, server rejection, and repeat submission.

## Analytics, consent, and privacy

- Define a measurement plan tied to business and user outcomes before adding tags. Track meaningful events such as qualified leads, completed purchases, sign-ups, search success, or key task completion.
- Use stable event names and documented parameters. Prevent duplicate events across route changes, retries, consent updates, and tag-manager rules.
- Never send passwords, payment data, health data, message contents, full form values, or unnecessary personal data in URLs, logs, or analytics.
- Minimize vendors, payloads, cookies, identifiers, and retention. Load analytics and advertising in accordance with applicable consent and privacy requirements.
- Consent must be informed, accessible, reversible, and honored. Rejection must be as usable as acceptance where law or policy requires it.
- Do not claim legal compliance without qualified review. Surface jurisdiction, data-flow, and policy questions that need an owner.
- Validate events in the target analytics system when access exists; otherwise verify network payloads and clearly mark production verification as pending.
- Measure Web Vitals in the field when appropriate, with enough route/device context to diagnose issues and without collecting unnecessary identifiers.

## Security and resilience

- Require HTTPS in production. Redirect HTTP once to the canonical HTTPS URL.
- Keep secrets in server-side environment/configuration systems. Never commit secrets, expose them through client bundles, or print them in output.
- Validate and normalize untrusted input on the server. Encode output by context. Use parameterized queries and safe platform APIs.
- Establish a Content Security Policy appropriate to the stack; begin with report-only when necessary and remove unsafe allowances where practical.
- Configure appropriate headers such as HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and clickjacking protection through CSP `frame-ancestors` or the applicable fallback.
- Add `rel="noopener"` where needed for new browsing contexts; add `nofollow`, `ugc`, or `sponsored` to untrusted/paid links when applicable.
- Lock dependencies, review install scripts and packages, keep supported versions patched, and address exploitable vulnerabilities based on reachability and risk. Do not perform blind major upgrades.
- Apply least privilege to APIs, tokens, databases, CMS roles, uploads, and deployment credentials.
- Protect authenticated responses from shared caching. Avoid leaking private data through errors, source maps, logs, analytics, referrers, or generated static files.
- Provide safe error handling, timeouts, retry/backoff where appropriate, and graceful degradation for dependency failures.
- For payments, authentication, regulated data, or other high-risk flows, follow platform requirements and request a specialist security/privacy review.

## Error, empty, and 404 states

- Provide a branded, lightweight, accessible 404 page with a correct `404` status, a route home, and useful navigation or search when available.
- Application errors must use the correct status and must not expose stack traces, secrets, internal paths, or raw provider responses.
- Route-level errors should preserve the surrounding navigation when safe and offer a recovery action.
- Treat no-results, empty datasets, expired links, unauthorized, forbidden, rate-limited, offline, maintenance, and server-error states as designed product states.
- Log actionable diagnostic context with privacy-safe identifiers. Avoid infinite retries or redirect loops.
- Test malformed URLs, direct route loads, missing content identifiers, failed APIs, timeouts, and JavaScript-disabled or blocked third parties where relevant.

## Maintainability

- Follow the repository's style, component boundaries, naming, and content conventions unless they are the source of a documented problem.
- Keep configuration and repeated site data—navigation, organization details, SEO defaults, breakpoints, and design tokens—in a clear source of truth.
- Create reusable components for genuine repeated patterns, not speculative abstraction. Keep route-specific content and metadata explicit.
- Separate content, presentation, behavior, and data access enough to make changes safe, while avoiding unnecessary layers.
- Document unusual performance decisions, third-party ownership, redirect sources, environment requirements, and deployment-specific behavior.
- Remove unused assets, dependencies, flags, and abandoned experiments after verification.
- Keep generated files generated; change their source templates/configuration rather than hand-editing output.
- Do not suppress type, lint, accessibility, or security warnings without a narrow reason documented near the suppression.

## Testing and quality gates

Use the project's tools when present. Add new tooling only when its ongoing value justifies its cost.

### Required automated checks where applicable

- production build;
- type checking and linting;
- unit tests for nontrivial logic;
- integration tests for data, metadata, forms, authentication, and external boundaries;
- end-to-end tests for critical user journeys and direct route loads;
- accessibility scans on representative route types and component states;
- broken internal links and missing assets;
- route/status/redirect/canonical/sitemap/robots validation;
- structured-data syntax and eligibility checks;
- bundle-size and performance-budget regression checks;
- visual regression for stable critical layouts when supported;
- dependency/security checks appropriate to the ecosystem.

### Route-level verification

Create a route matrix for every changed route and each representative route template. Verify the actual rendered response, not only shared configuration or component props:

- direct localhost navigation and hard refresh work without relying on prior client-side navigation;
- the response status, redirect behavior, final URL, and error/not-found handling are correct;
- the visible primary heading and content match the route's purpose and are present in the rendered HTML when indexation requires it;
- title, meta description, canonical, robots directive, Open Graph/Twitter fields, and social image are unique and correct for that route;
- canonical, sitemap, internal-link, protocol, host, base-path, locale, and trailing-slash policies agree;
- structured data matches visible content and contains no placeholder, stale, duplicate, or invented values;
- navigation current states, breadcrumbs, internal links, forms, and primary actions point to valid destinations;
- the browser console has no unexplained errors or hydration warnings and required network requests/assets do not fail;
- desktop and mobile screenshots show the intended final state after fonts and media load, without layout shift, clipping, overlap, or environment-only banners.

For templated, dynamic, localized, or paginated routes, test representative edge cases rather than assuming one successful instance proves the template. Include long/short content, missing optional media, special characters, empty results, and invalid identifiers as applicable.

### Required manual checks

- keyboard-only navigation and visible focus;
- screen-reader-oriented semantic review of critical flows;
- responsive layout across narrow, intermediate, and wide widths;
- real content extremes: long titles, missing images, large numbers, empty data, errors, and localization expansion;
- forms with invalid, valid, slow, failed, and duplicate submissions;
- primary conversions and analytics/consent behavior;
- social preview, favicon, title, description, canonical, and rendered HTML;
- final localhost screenshots for every changed route at desktop and mobile, plus reference-image comparison and at least two documented visual review/fix rounds for substantive visual work;
- typography after web fonts load, image crops and intrinsic sizing, spacing rhythm, alignment, radii, borders, shadows, sticky/fixed UI, dialogs, menus, focus states, and intermediate-width reflow;
- browser console, failed network requests, mixed content, and hydration errors;
- 404/error states, redirects, and old URLs after migrations.

Never claim WCAG conformance, security, cross-browser compatibility, SEO success, or production analytics correctness solely from automated tools.

## Deployment and launch checks

Before release:

- build from a clean production configuration and test the exact deployable artifact;
- confirm production environment variables and public/private boundaries without exposing values;
- verify the production hostname, HTTPS, redirect policy, base path, asset paths, headers, caching, compression, and CDN behavior;
- prevent staging/debug/source-map/private content exposure according to project policy;
- confirm indexation controls are correct for the environment and remove accidental production `noindex` or crawler blocks;
- verify canonical URLs, sitemap URLs, `robots.txt`, `hreflang`, structured data, social images, favicon, web manifest if used, and feed endpoints;
- verify all important and changed routes against the route matrix, including direct navigation, refreshes, rendered content, route-specific metadata, status codes, redirects, 404s, forms, email/webhook destinations, authentication, payments, and third-party integrations;
- run Lighthouse-style mobile checks on representative production-like routes and compare with the baseline;
- verify analytics, consent, conversion events, and error monitoring without sending test data as real production conversions;
- establish rollback/recovery and identify who owns post-launch monitoring.

After release:

- smoke-test the live site from outside the development environment;
- confirm live headers, caching, robots, sitemap, canonicals, forms, redirects, and analytics;
- monitor errors, uptime, conversions, crawl/indexation, and field Core Web Vitals;
- compare against the pre-launch baseline and remediate regressions;
- submit or refresh the sitemap/Search Console configuration when authorized and appropriate.

## Audit output and handoff

At completion, provide a concise evidence-based report containing:

- what changed and why;
- representative routes and flows tested;
- commands/checks run and whether they passed;
- before/after performance measurements with test conditions, when measured;
- SEO, accessibility, responsive, analytics, security, and deployment checks performed;
- assumptions, exceptions, and remaining risks;
- production-only checks or external actions still required.

Do not say a site "passes Google PageSpeed," "is fully SEO optimized," "is WCAG compliant," or "works on every browser" without defining the tested scope and presenting evidence. Prefer precise statements such as: "The median of three mobile Lighthouse runs on the production build scored 93 for the homepage under the stated test profile; field Core Web Vitals are not yet available."

## Definition of done

A website task is complete only when, within the agreed scope:

- the requested experience works with real content and direct navigation;
- the production build, tests, and relevant quality checks pass;
- representative pages have correct semantics, metadata, canonicals, indexation, statuses, and structured data;
- critical flows are keyboard-accessible and manually reviewed;
- responsive layouts work across the supported range without overflow or obscured controls;
- substantive visual work has completed the localhost desktop/mobile screenshot loop, including at least two review/fix rounds and direct comparison with supplied references;
- approved brand assets are used correctly and the final design is specific to the project's identity rather than an unsupported generic template;
- performance meets the documented budgets or exceptions are justified with evidence;
- errors, empty states, forms, redirects, analytics, privacy, and security behavior are handled as applicable;
- deployment configuration is verified or production-only checks are clearly handed off;
- no meaningful UX or functionality was sacrificed merely to improve a score.

## Authoritative references

When standards or platform behavior may have changed, verify against current primary documentation before implementing:

- [Google Search Essentials and SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google crawling and indexing documentation](https://developers.google.com/search/docs/crawling-indexing)
- [Google structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google/web.dev Web Vitals](https://web.dev/articles/vitals)
- [Chrome Lighthouse documentation](https://developer.chrome.com/docs/lighthouse/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [MDN Web Docs](https://developer.mozilla.org/)
