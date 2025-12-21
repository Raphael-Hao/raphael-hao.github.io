Update items in `@homepage/_data/ddls.yml`.
The following is my tracked conferences and their official websites:

- SOSP: https://sigops.org/s/conferences/sosp/2026/
- OSDI: https://www.usenix.org/conference/osdi26
- ASPLOS: https://www.asplos-conference.org/
- ISCA: https://iscaconf.org
- HPCA: https://hpca-conf.org
- MICRO: https://www.microarch.org/
- EuroSys: https://www.eurosys.org/
- SC: https://supercomputing.org/
- PPoPP: https://ppopp26.sigplan.org/
- FAST: https://www.usenix.org/conference/fast27
- NSDI: https://www.usenix.org/conference/nsdi26
- ICS: https://ics-conference.org/
- SoCC: https://acmsocc.org/
- IPDPS: https://www.ipdps.org/
- ICPP: https://icpp2026.github.io/
- CGO: https://cgo.org/

You should note that there are no year-specific websites for some conferences. They either have a general website for current year or a subpage for each year. You should check the general website to get the conference data.

The following are the updating rules:

1. Before updating, you should first read `@homepage/_data/ddls.yml` to get the required fields for each tracked conferences.
2. You should check the conference data in the official website to make sure the data is correct.
3. ASPLOS, EuroSys, FAST, NSDI, ICS have multiple submission cycles. Each cycle should be treated as a separate conference.
4. If the conference data does not pass, you should keep it as it will be presented in the past deadlines section.
5. If the two years' conference data are available and the old one's date is not passed, you should present both of them.
6. If the conference date passed, you should delete the old one and only present the one of next year.
7. If the conference date passed and the next year's conference data is not available, you should infer the next year's deadline from the previous year's conference data. If it is inferred, you should add an annotation.

<!-- - ATC -->
