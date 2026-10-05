import React, { useEffect, useRef, useState } from "react";
import "./Header.css";

const translations = {
  Home: "ទំព័រដើម",
  "About HRSA": "អំពី HRSA",
  "Humanitarian Support": "ជំនួយមនុស្សធម៌",
  "Religious Support": "ការគាំទ្រសាសនា",
  "Programs & Projects": "កម្មវិធី និងគម្រោង",
  "News & Stories": "ព័ត៌មាន និងរឿងរ៉ាវ",
  "Get Involved": "ចូលរួមជាមួយយើង",
  Contact: "ទំនាក់ទំនង",
  Donate: "បរិច្ចាគ",
  "Mission, Vision & Values": "បេសកកម្ម ចក្ខុវិស័យ និងគុណតម្លៃ",
  "Leadership & Contact": "ថ្នាក់ដឹកនាំ និងទំនាក់ទំនង",
  "Distribution of Gifts": "ការចែកអំណោយ",
  "Support for Families": "ការគាំទ្រគ្រួសារ",
  "Community Activities": "សកម្មភាពសហគមន៍",
  "Shared Values": "គុណតម្លៃរួម",
  "All Programs": "កម្មវិធីទាំងអស់",
  "Humanitarian Assistance": "ជំនួយមនុស្សធម៌",
  "Community Development": "ការអភិវឌ្ឍសហគមន៍",
  Volunteer: "ស្ម័គ្រចិត្ត",
  "Support Our Work": "គាំទ្រការងាររបស់យើង",
  "Partner With Us": "សហការជាមួយយើង",
  "Follow HRSA": "តាមដាន HRSA",
  "Serving Humanity.": "បម្រើមនុស្សជាតិ។",
  "Supporting Communities.": "គាំទ្រសហគមន៍។",
  "Learn More": "ស្វែងយល់បន្ថែម",
  "Get Involved": "ចូលរួមជាមួយយើង",
  "Let's Stay": "សូមរក្សា",
  "Connected.": "ទំនាក់ទំនងជាមួយគ្នា។",
};

const translatePage = (toKhmer) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const original = node.dataset?.hrsaOriginalText || node.textContent;
    if (node.parentElement?.closest("script,style,noscript")) return;
    if (!node.dataset) return;
    if (!node.dataset.hrsaOriginalText)
      node.dataset.hrsaOriginalText = original;
    const value = node.dataset.hrsaOriginalText.trim();
    if (!value) return;
    const translated = translations[value];
    if (toKhmer && translated)
      node.textContent = node.textContent.replace(value, translated);
    else if (!toKhmer)
      node.textContent = node.textContent.replace(
        node.textContent.trim(),
        value,
      );
  });
};

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [language, setLanguage] = useState(
    () => localStorage.getItem("hrsa-language") || "EN",
  );
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef(null);

  useEffect(() => {
    const close = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target))
        setLanguageOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "KH" ? "km" : "en";
    localStorage.setItem("hrsa-language", language);
    requestAnimationFrame(() => translatePage(language === "KH"));
  }, [language]);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchTerm.trim().toLowerCase();
    if (!query) return;
    const sections = document.querySelectorAll("main section[id]");
    const match = Array.from(sections).find((section) =>
      section.textContent.toLowerCase().includes(query),
    );
    if (match) {
      match.scrollIntoView({ behavior: "smooth", block: "start" });
      setSearchOpen(false);
    }
  };

  const selectLanguage = (value) => {
    setLanguage(value);
    setLanguageOpen(false);
  };

  return (
    <div className="top-header" role="banner">
      <div className="top-header-container">
        <div className="top-header-contact">
          <a href="tel:+85588773399,+85592836190" className="top-header-item">
            <span className="top-header-icon">☎</span>
            <span>+855 88 773 399,</span>
            <span>+855 15 773 399</span>
            <span>+855 92 836 190</span>
          </a>
          <a href="mailto:info@hrsa.org" className="top-header-item">
            <span className="top-header-icon">✉</span>
            <span>info@hrsa.org</span>
          </a>
        </div>

        <div className="top-header-tools">
          <div className={`top-header-search ${searchOpen ? "open" : ""}`}>
            {searchOpen && (
              <form className="top-header-search-form" onSubmit={handleSearch}>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={
                    language === "KH" ? "ស្វែងរក HRSA..." : "Search HRSA..."
                  }
                  aria-label="Search HRSA"
                  autoFocus
                />
              </form>
            )}
            <button
              type="button"
              className="top-header-tool-button"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              ⌕
            </button>
          </div>

          <div
            className={`top-header-language ${languageOpen ? "open" : ""}`}
            ref={languageRef}
          >
            <button
              type="button"
              className="language-button"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((v) => !v)}
            >
              <span aria-hidden="true">◎</span>
              <span>{language}</span>
              <span className="language-chevron">⌄</span>
            </button>
            {languageOpen && (
              <div className="language-menu" role="menu">
                <button
                  type="button"
                  className={language === "EN" ? "active" : ""}
                  onClick={() => selectLanguage("EN")}
                >
                  English <span>EN</span>
                </button>
                <button
                  type="button"
                  className={language === "KH" ? "active" : ""}
                  onClick={() => selectLanguage("KH")}
                >
                  ខ្មែរ <span>KH</span>
                </button>
              </div>
            )}
          </div>

          <div className="top-header-social" aria-label="Social media links">
            <span className="top-header-follow">Follow HRSA</span>
            <a href="#contact" aria-label="Facebook">
              f
            </a>
            <a href="#contact" aria-label="Telegram">
              ✈
            </a>
            <a href="#contact" aria-label="YouTube">
              ▶
            </a>
            <a href="#contact" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
