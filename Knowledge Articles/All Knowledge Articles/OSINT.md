# 🔍OSINT - Open Source Intelligence🕵️‍♂️
#KA #CTI #BLUE 

### What is OSINT?
>*OSINT, or Open-Source Intelligence**, is the process of collecting, analysing, and disseminating information from publicly available sources to gain strategic insights and answer specific questions. It involves gathering data from websites, social media, news outlets, public records, forums, and other open sources without engaging in illegal or unethical activities.*

## THE ONE ABOVE ALL
[OSINT FRAMEWORK](https://osintframework.com/) this is the most utilised resource on this page, it is a full broken down framework on how to identify specific details or data points on an individual

---

## Sock Puppets
> ***sock puppets are fake online identities** used to gather information and conduct investigations while maintaining the investigator's real identity and privacy. These accounts help researchers access restricted content, perform discreet reconnaissance, and protect their personal and professional lives by separating them from their work*

While preforming OSINT it's good practice to use a SOC puppet, this will ensure complete anonymity and allow for realistic results.

---

### Best Practice for Sock Puppet Accounts 
- Do not associate the account to your own real identity
- Add history to the accounts  (adding followers, creating posts, adding images & generating a footprint)
  Breakdown of best practices here: https://web.archive.org/web/20210125191016/https://jakecreps.com/2018/11/02/sock-puppets/

## Google Dorking
Use Google’s advanced search operators to discover publicly exposed information, misconfigurations, or sensitive data during OSINT or security assessments.

|     Operator     |                  Usage               |          Example          |
| ---------------- | ------------------------------------ | ------------------------- | 
|   site:          |  Restrict results to a domain        |  `site:example.com`       | 
|   filetype:      |  Search for specific file extensions |  `filetype:pdf`           |
|   intitle:       |  Find keywords in page titles        |  `intitle:"index of"`     |
|   inurl:         |  Match keywords in URL               |  `inurl:admin`            |
|   intext:        |  Match keywords in html body         |  `intext: password`       |
|   cache:         |  View cached versions of sites       |  `cache:example.com`      |
|   -              |  Exclude terms                       |  `site:example.com -jobs` |
|   "<term>"       |  Exact match search                  |  `"confidential"`         |
|   OR             |  Logical OR                          |  `Login OR Signin`        |
|   *              |  Wild card                           |  `example.*`              |

##### Examples of Google Dorking:
```text
site:example.com inurl:login  //finding login pages
``` 

```text
site:example.com filetype:pdf confidential    //finding exposed documents
```

```text
intitle:"index of" "parent directory"     //finding directory listings
```

```text
filetype:env OR filetype:ini "password"     //finding config files
```

```text
inurl:"/view/view.shtml"     //finding IOT devices
```

## Image OSINT

### Reverse Image Lookup

Reverse image searching is the practice of taking an image and using search engines to find where it has appeared online, identify its origin, verify authenticity, or discover related content such as older versions, higher resolutions, or connected profiles.

##### Key Resources
- [**Google Images / Google Lens**](https://images.google.com/) → Broad coverage, quick general matches.
- [**Yandex**](https://yandex.com/t) → Strong facial and object recognition, often finds matches others miss.
- [**TinEye**](https://tineye.com/) → Excellent for historical tracking and identifying when/where an image first appeared.
> ⚠️ **Note:** Results can vary, false matches are common, and regional differences exist—always verify manually.

### Image Metadata 

Image metadata refers to hidden information stored within image files, such as the camera model, date/time of capture, GPS coordinates, and software used. Analysts use metadata to verify authenticity, trace origins, and sometimes geolocate where a photo was taken.

##### Key Resources
- **[[ExifTool]]** → A powerful command-line utility that extracts detailed metadata locally from image files, including EXIF, IPTC, and XMP data.
- [**Jimpl.com**](https://Jimpl.com) → An online service for quick, browser-based metadata extraction without installing software.
> ⚠️ **Note:** Metadata can be removed (stripped) or tampered with, so findings should always be cross-checked with other OSINT methods.

### Physical Location

Physical location OSINT is the process of gathering intelligence about a target’s real-world environment before an engagement. The goal is to identify entry points, building layouts, security controls, and surrounding terrain that may impact physical or cyber-physical penetration testing.

##### Key Resources
- [**Google Maps**](https://www.google.com/maps) → Satellite view, Street View, and 3D maps provide insight into building layouts, entrances/exits, fences, cameras, guard posts, and nearby infrastructure.
- **Droning** → Aerial reconnaissance with drones offers high-resolution, real-time imagery of target sites, revealing blind spots, parking areas, roof access points, and patrol patterns.

> ⚠️ **Note:** Always ensure reconnaissance complies with legal and engagement scope requirements. Unauthorized droning or mapping of private property can have serious legal consequences.


## Email OSINT

Email OSINT is the process of identifying, verifying, and enriching email addresses linked to a person or organization. It is commonly used during reconnaissance or penetration tests to discover employee emails, validate address formats, and gather intelligence on targets within scope.

##### Key Resources
- [**Hunter.io**](https://hunter.io/) → Domain search and pattern discovery with built-in verification.
- [**VoilaNorbert.com**](https://www.voilanorbert.com/) → Name + domain lookups for targeted email discovery.
- **Clearbit** (Access Through Gmail Plugin) → Enrichment of email addresses with job titles, company data, and social profiles.
- [**EmailHippo**](https://tools.emailhippo.com/) → Checks syntax, MX records, and deliverability.
- [**Email Checker**](https://email-checker.net/) → Lightweight verifier for MX/SPF/SMTP validity.
- [**Mail Meteor – Email Reputation**](https://mailmeteor.com/tools/email-reputation) → Online tool for checking sender reputation and blacklist status.
- [**MX Toolbox Email Health**](https://mxtoolbox.com/emailhealth) → Tests email configuration (DNS, SPF, DKIM, DMARC) and overall domain/email health.
- [**API Void Email Reputation Check**](https://www.apivoid.com/tools/email-reputation-check/) → Reputation scoring and blacklist lookups for email addresses.
- [**Google**](https://google.com) → Google is also a great resource for identifying an emails belonging to individuals.

>⚠️ **Note:** Results may include false positives and must be verified. Always ensure usage aligns with legal requirements and engagement scope.

## Password OSINT

Password OSINT is the process of searching leaked credential databases to identify if email addresses, usernames, or passwords tied to a target have been exposed in breaches. This helps assess password reuse risks, validate potential compromises, and support remediation actions during authorized penetration testing or threat hunting. It is important to note that breach data is **not conclusive evidence** of compromise and should always be verified and handled carefully.

##### Key Resources
- [**DeHashed**](https://dehashed.com/)(**PAID*) → Breach database search and monitoring service.
- [**Hashes.org**](https://hashes.org/) → Community-driven archive of leaked password hashes.
- [**WeLeakInfo.to**](https://weleakinfo.to/v2/) → Breach search engine for exposed credentials (paid).
- [**Have I Been Pwned (HIBP)**](https://haveibeenpwned.com/) → Public breach lookup and “Pwned Passwords” service (free, with paid API tiers).
- [**Snusbase**](https://snusbase.com/) → Commercial breach database with credential search (paid).
- [**LeakCheck**](ttps://leakcheck.io/) → Breach data lookup service with paid access tiers.
- [**Scylla**](https://scylla.sh/) → Breach aggregation resource with various community and commercial uses.
- [**Google**](https://google.com) → Google is also a great resource for identifying plaintext passwords using some dorking techniques

>⚠️ **Note:** Results from these services are not definitive. Coverage varies between providers, false positives are common, and some results may be outdated. Always cross-check findings against internal logs, scope restrictions, and ensure compliance with legal and privacy requirements.

## Username OSINT

Username OSINT is the process of investigating how a username or handle is used across websites, social media platforms, and online services. It helps identify linked accounts, map an individual’s online presence, and uncover potential attack surfaces during reconnaissance or penetration testing.

##### Key Resources
- [**Namechk.com**](https://Namechk.com) → Checks username availability across a wide range of websites and social platforms.
- [**Namecheckup.com**](https://Namecheckup.com) → Similar multi-platform search for username usage and availability.
- [**WhatsMyName.me**](https://WhatsMyName.me) → Community project that maps usernames to sites where they exist or don’t.
- [**WhatsMyName.app**](https://WhatsMyName.app) → Practical OSINT tool for bulk or automated username checks based on the WhatsMyName dataset.
- [**Google**](https://google.com) → Google is also a great resource for identifying an usernames used on different platforms

>⚠️ **Note:** Username matches are not always conclusive — users may reuse handles or spoof others. Always cross-verify findings with additional OSINT methods (metadata, profile details, timestamps, etc.).

## People OSINT

People OSINT is the process of gathering publicly available information on individuals to map their digital footprint, confirm identities, or build context for investigations and penetration tests. This can include addresses, phone numbers, relatives, social profiles, and online activity.

##### Key Resources
- [**WhitePages**]((https://www.whitepages.com/) → Directory-style lookups for addresses, phone numbers, and related individuals.
- [**TruePeopleSearch**](https://www.truepeoplesearch.com/) → Free people search with names, phone numbers, and addresses.
- [**FastPeopleSearch**](https://www.fastpeoplesearch.com/)) → Public records search for personal contact and location data.
- [**FastBackgroundCheck**](https://www.fastbackgroundcheck.com/) → Aggregates public records for contact and background info.
- [**WebMii**](https://webmii.com/) → Searches the web for online mentions and profiles tied to a person.
- [**PeekYou**](https://peekyou.com/) → OSINT engine that links people to social media accounts and web pages.
- [**411**](https://www.411.com/) → Directory assistance service for phone numbers and addresses.
- [**Spokeo**](https://www.spokeo.com/) → People search and data aggregation service (paid for full results).
- [**That’sThem**](https://thatsthem.com/) → Reverse lookups for emails, phones, IPs, and addresses.
- [**VoterRecords**](https://www.voterrecords.com) → U.S. voter registration database providing names, addresses, and registration details.
- [**Google**](https://google.com) → Google is also a great resource for identifying an individual.

>⚠️ **Note:** Data from people search engines can be incomplete, outdated, or inaccurate. Many services also require payment for detailed reports. Always verify results with multiple independent sources and ensure compliance with privacy laws and scope restrictions.

## Phone Number OSINT

Phone Number OSINT is the process of investigating phone numbers to confirm ownership, identify linked accounts, or gather intelligence on individuals or organizations. This can include caller identity, carrier information, geolocation hints, and connections to online profiles. It is often used in penetration testing or investigations to map potential attack surfaces.

##### Key Resources
- [**SpyDialer**](https://www.spydialer.com/) → Provides free reverse phone number lookups, including names, addresses, and possible connections.
- [**TrueCaller**](https://www.truecaller.com/) → Popular global app and database for identifying unknown callers and spam numbers.
- [**CallerID Test**](https://calleridtest.com/) → Checks the accuracy and legitimacy of Caller ID information.
- [**Infobel**](https://www.infobel.com/) → International directory for phone number lookups, businesses, and individuals.
- [**Google**](https://google.com) → Basic but effective for cross-referencing numbers with websites, social media, and public mentions.

> ⚠️ **Note:** Phone number OSINT results are not always conclusive. Data may be incomplete, outdated, or inaccurate. Use multiple tools for cross-verification, and ensure all activity remains within legal and authorized scope.

## Social Media OSINT

Social Media OSINT is the process of collecting publicly available information from social networks to build intelligence on individuals, organizations, or activities. It is useful for mapping digital footprints, identifying relationships, and tracking online behavior. Each platform has unique techniques and tools.

##### Key Resources
**Twitter**
- [**OSINT Twitter Tools**](https://github.com/rmdir-rp/OSINT-twitter-tools) → A collection of tools and scripts to extract Twitter data for OSINT purposes, including account analysis, tweet harvesting, and metadata extraction.

**Facebook**
- **Profile ID Extraction (manual method)** → View the target profile, right-click and select _View Page Source_, then search (`Ctrl+F`) for `profile_id=` to find the numeric ID.
- [**SowSearch**](https://sowsearch.info) → Facebook search engine allowing OSINT queries across profiles, groups, and events.
- [**IntelX Facebook Tools**](https://intelx.io/tools?tab=facebook) → OSINT utilities for looking up Facebook IDs, archived content, and more.

**Instagram**
- **Profile ID Extraction (manual method)** → Open the Instagram profile, right-click and select _View Page Source_, then search (`Ctrl+F`) for `profile_id` to obtain the numeric identifier.
- [**ImgInn**](https://imginn.com) → Enables viewing and downloading Instagram posts, stories, and highlights without logging in.

**Snapchat**
- [**Snapchat Map**](https://map.snapchat.com) → Allows geographic searches of public snaps and story posts to gather location-based intelligence.

**Reddit**
- Native Reddit search and third-party tools can be used to track usernames, comments, and subreddit activity. OSINT workflows often involve scraping posts, analyzing timelines, and mapping cross-posted content.

**LinkedIn**
- LinkedIn can be leveraged for professional OSINT by identifying employee lists, career timelines, connections, and company organizational structure. Manual searches or automation (e.g., LinkedIn dorks) can be used, respecting scope and legal constraints.

**TikTok**
- TikTok OSINT involves analyzing usernames, profile metadata, associated videos, hashtags, and engagement metrics. Tools and manual inspection can reveal posting locations, behavioral patterns, and linked accounts.

> ⚠️ **Note:** Social media OSINT results can be manipulated, incomplete, or anonymized. Always cross-verify with other sources and comply with scope, privacy regulations, and platform terms of service.

## Website OSINT

Website OSINT is the process of collecting intelligence on websites, domains, and infrastructure to uncover technologies, ownership, historical data, vulnerabilities, and attack surfaces. It is a key part of reconnaissance in penetration testing and threat intelligence.

##### Key Resources

- [**Google**](https://google.com) → Use Google dorking (advanced operators such as `site:`, `inurl:`, `filetype:`) to discover exposed content, hidden directories, or sensitive files.
- [**BuiltWith**](https://builtwith.com) → Identifies the technologies, frameworks, and hosting providers used by a website. Useful for mapping tech stacks and potential vulnerabilities.
- [**CentralOps**](https://centralops.net) → Provides WHOIS lookups, traceroutes, and domain records for background checks on websites.
- [**DNSlytics**](https://dnslytics.com) → Offers reverse IP lookups, DNS analysis, and analytics on domains sharing the same infrastructure.
- [**SpyOnWeb**](https://spyonweb.com) → Discovers other domains linked by the same Google Analytics ID, IP address, or tracking codes.
- [**VirusTotal**](https://www.virustotal.com) → Analyzes URLs for malware, phishing, or malicious content, and provides detection results across multiple AV engines.
- [**VisualPing**](https://visualping.io) → Monitors websites for changes and notifies when content, structure, or availability changes.
- [**BacklinkWatch**](http://backlinkwatch.com) → Displays inbound links pointing to a domain, useful for SEO intelligence and potential attack paths.
- [**ViewDNS**](https://viewdns.info) → Multi-purpose domain tool offering WHOIS, reverse IP, traceroute, and DNS record searches.
- [**URLScan**](https://urlscan.io) → Provides detailed scans of URLs, showing requests, responses, and related domains. Great for malware analysis and infrastructure mapping.
- [**DNSDumpster**](https://dnsdumpster.com) → Free DNS recon and domain mapping tool that generates visual domain infrastructure maps. 
- [**Web-Check**](https://web-check.as93.net) → Aggregates information such as DNS records, SSL certificates, headers, and open ports.
- [**crt.sh**](https://crt.sh) → Searches Certificate Transparency logs to identify SSL/TLS certificates issued for domains and subdomains.
- [**Shodan**](https://www.shodan.io) → A search engine for internet-connected devices and services. It can reveal open ports, banners, and vulnerabilities tied to a website’s infrastructure.
- [**Wayback Machine / Internet Archive**](https://archive.org/web) → Provides snapshots of websites over time, useful for discovering historical content, past infrastructure, and removed data.

> ⚠️ **Note:** Website OSINT tools provide intelligence but may include outdated or incomplete data. Always cross-check with multiple sources, document findings carefully, and operate within scope and legal limits.

## Business OSINT

Business OSINT is the practice of collecting intelligence on companies, their structure, and operations. This includes identifying ownership, key employees, subsidiaries, financial records, partnerships, and other publicly available data. It is often used in penetration testing, due diligence, or competitive intelligence.

##### Key Resources
- [**LinkedIn**](https://linkedin.com) → Useful for identifying employees, job roles, organizational structures, and potential social engineering targets. Company pages can reveal growth trends, office locations, and technology usage through employee skills.
- [**Google**](https://google.com) → Search operators can uncover press releases, company documents, cached pages, and mentions across the web. Using `site:company.com` or `filetype:pdf` can help locate public records, whitepapers, and potentially sensitive documents.
- [**OpenCorporates**](https://opencorporates.com/) → The largest open database of companies worldwide. Provides official corporate registration data, ownership structures, subsidiaries, and directors, which is useful for mapping business hierarchies.
- [**AI Hit**](https://www.aihitdata.com/) → Aggregates company data, including technology profiles, recent news, competitor insights, and organizational summaries. Useful for understanding company positioning and changes over time.

> ⚠️ **Note:** Business OSINT sources may contain outdated or incomplete information. Always validate findings through multiple tools and ensure compliance with legal, ethical, and scope boundaries when conducting investigations.





---

## Resources
### Sock Puppet Generation
- [**Fake Name Generator**](https://www.fakenamegenerator.com) - able to create an entire persona.
- [**This Person Does Not Exist**](https://www.thispersondoesnotexist.com) - uses AI to generate a realistic image of a person.
- [**Privacy.com**](https://privacy.com) - allows for generation of a real virtual credit card that can have funds made available.

### Search Engines
- [**Google**](https://www.google.com/) -> The front page of the internet
- [**Bing**](https://www.bing.com/) -> the secondary page of the internet
- [**Yahoo**](https://www.Yahoo.com/) -> the tertiary page of the internet
- [**Yandex**](https://yandex.com/) -> The most popular Russian search engine
- [**Duck Duck Go**](https://duckduckgo.com/) -> A un-restrictive search engine
- [**Baidu**](http://www.baidu.com/) -> the most popular Chinese search engine
  
### Additional Resources:
- [**OSINT Framework**]()
- [**Intelx.io**](https://intelx.io/) - a global repository search engine for OSINT

### OSINT Scripts I have designed:
> [!note]- Account Checker Script:
> 
> ```python
> import argparse
>import requests
>import re
>import sys
>
>def identify_input_type(input_str):
>   email_regex = r"[^@]+@[^@]+\.[^@]+"
>    if re.fullmatch(email_regex, input_str):
>        return "email"
>    elif " " in input_str.strip():
>        return "full_name"
>    else:
>        return "username"
>
>def check_username_platforms(username):
>   platforms = {
>        # General & Popular
>        "X (Twitter)": f"https://twitter.com/{username}",
>        "Facebook": f"https://www.facebook.com/{username}",
>        "Instagram": f"https://www.instagram.com/{username}",
>        "Pinterest": f"https://www.pinterest.com/{username}",
>        "Reddit": f"https://www.reddit.com/user/{username}",
>        "LinkedIn": f"https://www.linkedin.com/in/{username}",
>        "Tumblr": f"https://{username}.tumblr.com",
>        "Flickr": f"https://www.flickr.com/people/{username}",
>       "SoundCloud": f"https://soundcloud.com/{username}",
>        "Medium": f"https://medium.com/@{username}",
>        "DeviantArt": f"https://{username}.deviantart.com",
>        "VK": f"https://vk.com/{username}",
>        "Mastodon": f"https://mastodon.social/@{username}",
>        "Gab": f"https://gab.com/{username}",
>        "Truth Social": f"https://truthsocial.com/@{username}",
>
>        # Gaming
>        "Steam": f"https://steamcommunity.com/id/{username}",
>        "Roblox": f"https://www.roblox.com/users/{username}/profile",  # usually numeric userID
>        "Speedrun.com": f"https://www.speedrun.com/user/{username}",
>        "Chess.com": f"https://www.chess.com/member/{username}",
>
>        # Developer & Technical
>        "GitHub": f"https://github.com/{username}",
>        "GitLab": f"https://gitlab.com/{username}",
>        "Stack Overflow": f"https://stackoverflow.com/users/{username}",
>        "HackerOne": f"https://hackerone.com/{username}",
>        "TryHackMe": f"https://tryhackme.com/p/{username}",
>        "Hack The Box": f"https://app.hackthebox.com/profile/{username}",
>        "Replit": f"https://replit.com/@{username}",
>        "Dev.to": f"https://dev.to/{username}",
>
>        # Other
>        "Spotify": f"https://open.spotify.com/user/{username}",
>        "Twitch": f"https://www.twitch.tv/{username}",
>        "TikTok": f"https://www.tiktok.com/@{username}"
>    }
>
>    found = {}
>    headers = {
>        "User-Agent": "Mozilla/5.0 (compatible; OSINT-Tool/1.0)"
>    }
>
>    for platform, url in platforms.items():
>        try:
>            response = requests.get(url, headers=headers, timeout=5)
>            if response.status_code == 200:
>                found[platform] = url
>        except requests.RequestException:
>            pass  # Ignore network errors
>
>    return found
>
>def main():
>    parser = argparse.ArgumentParser(description="Check if a username exists across many social platforms.")
>    parser.add_argument("input", help="Username, email address, or full name to search for")
>    args = parser.parse_args()
>
>    user_input = args.input.strip()
>    input_type = identify_input_type(user_input)
>
>    if input_type == "username":
>        print(f"[+] Searching for username: {user_input}")
>        results = check_username_platforms(user_input)
>        if results:
>            print("[+] Accounts found:")
>            for platform, url in results.items():
>                print(f"  - {platform}: {url}")
>        else:
>            print("[-] No accounts found with that username.")
>    elif input_type == "email":
>        print("[-] Email search not implemented. Consider HaveIBeenPwned or Gravatar APIs.")
>    elif input_type == "full_name":
>        print("[-] Full name search not implemented. Consider search engine integration.")
>    else:
>        print("[-] Could not determine input type.")
>
>if __name__ == "__main__":
>    main()

> ```


