# 🔍OSINT - Open Source Intelligence🕵️‍♂️
#KA #CTI #BLUE 

### What is OSINT?
>*OSINT, or Open-Source Intelligence**, is the process of collecting, analysing, and disseminating information from publicly available sources to gain strategic insights and answer specific questions. It involves gathering data from websites, social media, news outlets, public records, forums, and other open sources without engaging in illegal or unethical activities.*

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
- **Google Images / Google Lens** → Broad coverage, quick general matches.
- **Yandex** → Strong facial and object recognition, often finds matches others miss.
- **TinEye** → Excellent for historical tracking and identifying when/where an image first appeared.
> ⚠️ **Note:** Results can vary, false matches are common, and regional differences exist—always verify manually.

### Image Metadata 

Image metadata refers to hidden information stored within image files, such as the camera model, date/time of capture, GPS coordinates, and software used. Analysts use metadata to verify authenticity, trace origins, and sometimes geolocate where a photo was taken.

##### Key Resources
- **[[ExifTool]]** → A powerful command-line utility that extracts detailed metadata locally from image files, including EXIF, IPTC, and XMP data.
- **Jimpl.com** → An online service for quick, browser-based metadata extraction without installing software.
> ⚠️ **Note:** Metadata can be removed (stripped) or tampered with, so findings should always be cross-checked with other OSINT methods.

### Physical Location

Physical location OSINT is the process of gathering intelligence about a target’s real-world environment before an engagement. The goal is to identify entry points, building layouts, security controls, and surrounding terrain that may impact physical or cyber-physical penetration testing.

##### Key Resources
- **Google Maps** → Satellite view, Street View, and 3D maps provide insight into building layouts, entrances/exits, fences, cameras, guard posts, and nearby infrastructure.
- **Droning** → Aerial reconnaissance with drones offers high-resolution, real-time imagery of target sites, revealing blind spots, parking areas, roof access points, and patrol patterns.

> ⚠️ **Note:** Always ensure reconnaissance complies with legal and engagement scope requirements. Unauthorized droning or mapping of private property can have serious legal consequences.


## Email OSINT

Email OSINT is the process of identifying, verifying, and enriching email addresses linked to a person or organization. It is commonly used during reconnaissance or penetration tests to discover employee emails, validate address formats, and gather intelligence on targets within scope.

##### 🔎 Key Resources
- **Hunter.io** → Domain search and pattern discovery with built-in verification.
- **VoilaNorbert.com** → Name + domain lookups for targeted email discovery.
- **Clearbit** → Enrichment of email addresses with job titles, company data, and social profiles.
- **EmailHippo** → Checks syntax, MX records, and deliverability.
- **Email Checker** → Lightweight verifier for MX/SPF/SMTP validity.

⚠️ **Note:** Results may include false positives and must be verified. Always ensure usage aligns with legal requirements and engagement scope.

## Password OSINT

---

## Resources
### Sock Puppet Generation
- **Fake Name Generator** [HERE](https://www.fakenamegenerator.com) - able to create an entire persona.
- **This Person Does Not Exist** [HERE](https://www.thispersondoesnotexist.com) - uses AI to generate a realistic image of a person.
- **Privacy.com** [HERE](https://privacy.com) - allows for generation of a real virtual credit card that can have funds made available.
  
### Search Engines
- **Google** [HERE](https://www.google.com/)
- **Bing** [HERE](https://www.bing.com/)
- **Yandex** [HERE](https://yandex.com/)
- **Duck Duck Go** [HERE](https://duckduckgo.com/)
- **Baidu** [HERE](http://www.baidu.com/)
  
### Image OSINT
- **Google Lens** [HERE](https://images.google.com/)
- **Yandex** [HERE](https://yandex.com/t)
- **TinEye** [HERE](https://tineye.com/)
- **Jimple** [HERE](https://Jimpl.com)
- **Google Maps**[HERE](https://www.google.com/maps)
  
### Email OSINT
- **Hunter.io** [HERE](https://hunter.io/)
- **VoliaNobert** [HERE](https://www.voilanorbert.com/)
- **Clearbit** (Access Through Gmail Plugin)
- **EmailHippo** [HERE](https://tools.emailhippo.com/)
- **Email Checker** [HERE](https://email-checker.net/)
- **Mail Meteor** [HERE](https://mailmeteor.com/tools/email-reputation)
- **MX Toolbox Email Health** [HERE](https://mxtoolbox.com/emailhealth)
- **API Void Email Reputation Check** [HERE](https://www.apivoid.com/tools/email-reputation-check/)


###


