# Service Level Agreement (SLA) for Enterprise and Pro plans

Last updated: February 14, 2023

This Service Level Agreement (SLA) is intended for our "Enterprise" and "Pro" plan customers only (each, a "**Customer**"). If you are not an Enterprise or Pro plan customer, the terms of these Service Levels do not apply to your use of our Software.

## 1. Availability

During the Term of the agreement under which Amplication has agreed to provide the Amplication Software service to you (as applicable, the "**Agreement**"), the Software service will be provided with a Monthly Uptime Percentage objective, as follows (the "**Service Level Objective**" or "**SLO**"):

| **Performance Criterion**   | **Key Indicator** | **Monthly Uptime Percentage** |
| --------------------------- | ----------------- | ----------------------------- |
| Availability of the Service | Availability      | 99.0%                         |

If Amplication does not meet the SLO, and if Customer meets its obligations under this SLA, Customer will be eligible to receive the Financial Credits described below. The Monthly Uptime Percentage and Financial Credit, if any, are determined on a calendar month basis. This SLA states Customer's sole and exclusive remedy, and Amplication's sole liability, for any failure by Amplication to meet the SLO. Capitalized terms used in this SLA, but not defined in this SLA, have the meaning set forth in the Agreement.

### 1.1 Definitions

- **“Downtime Period”** means a period of five or more consecutive minutes of Downtime.
  - Intermittent Downtime for a period of less than five minutes will not be counted towards any Downtime Periods.
  - Scheduled Downtime will not be counted towards any Downtime Periods.
- **“Financial Credit”** means the following:

| **Monthly Uptime Percentage** | **Percentage of monthly bill for the respective Covered Service that does not meet SLO and that will be credited to Customer's future monthly bills** |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 97.0% to < 99.0%              | 10%                                                                                                                                                   |
| 95.0% to < 97.0%              | 25%                                                                                                                                                   |
| < 95.0%                       | 50%                                                                                                                                                   |

- **“Monthly Uptime Percentage”** means the total number of minutes in a month, minus the number of Downtime minutes suffered from all Downtime Periods in a month, divided by the total number of minutes in a month.
- **“Maintenance Window”** means a period of time when the service is taken offline for maintenance tasks. This includes upgrading APIs.
- **“Scheduled Downtime”** means Downtime resulting from Amplication performing maintenance on the Covered Service during a Maintenance Window.

### 1.2 Customer Must Request Financial Credit

In order to receive any of the Financial Credits described above, Customer must notify Amplication technical support within 30 days from the time Customer becomes eligible to receive a Financial Credit. Customer must also provide Amplication with server log files showing loss of external connectivity errors and the date and time those errors occurred. If Customer does not comply with these requirements, Customer will forfeit its right to receive a Financial Credit. If a dispute arises with respect to this SLA, Amplication will make a determination in good faith based on its system logs, monitoring reports, configuration records, and other available information.

### 1.3 Maximum Financial Credit

The maximum aggregate number of Financial Credits issued by Amplication to Customer for all Downtime Periods in a single billing month will not exceed 50% of the amount due from Customer for the Covered Service for the applicable month. Financial Credits will be in the form of a monetary credit applied to future use of the Service and will be applied within 60 days after the Financial Credit was requested.

## 2. Response Times

2.1 Customer will report all support issues with the Software service via Amplication support email at [support@amplication.com](mailto:support@amplication.com).

2.2 Amplication will make commercially reasonable efforts to respond to Customer's reporting of support incidents, according to the severity of the issue, as set out below.

2.3 Business hours are from 10 AM to 6 PM (local Israel time) except as otherwise stated.

| ` `**Severity** |                                                                                                                                **Description**                                                                                                                                 |         **Response Time**          |
| :-------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------: |
|     Urgent      |                                    Critical Issue: Software defect resulting in full or partial system outage or a condition that makes the Amplication software service unusable or unavailable in production for all of Customer’s users.                                    |    1 business hour (24/7 × 365)    |
|      High       |            Significant Business Disruption: Software defect where major functionality is impacted and significant performance degradation is experienced. The issue impacts a significant proportion of the user base and/or major Software service functionality.             | 4 business hours Sunday - Thursday |
|     Normal      | Minor Feature or Functional Issue or General Question: Either a Software defect resulting in a component of the Software service not performing as expected or documented; or an inquiry by a Customer representative regarding a general technical issue or general question. |  1 business day Sunday - Thursday  |
|       Low       |                                                                                       Minor Issue or Feature Request. A request for information about the Software service or a feature.                                                                                       | 2 business days Sunday - Thursday  |

## 3. SLA Exclusions

The SLA does not apply to any (a) features designated pre-general availability (unless otherwise set forth in the associated documentation); (b) features excluded from the SLA (in the associated documentation); or (c) errors: (i) caused by factors outside of Amplication's reasonable control; (ii) that result from Customer's software or hardware or third party software or hardware, or both; (iii) that result from abuse or other behavior that violates the Agreement; or (iv) that result from quotas applied by the system or listed in the Amplication software.
