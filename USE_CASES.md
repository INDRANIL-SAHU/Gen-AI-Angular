# 📖 iDemand Simulator POC - Use Case Stories

---

## 📌 Overview

This document outlines 5 comprehensive use-case stories for the iDemand Simulator POC. Each story represents a real-world scenario that end-users will encounter while managing demands.

---

## ✅ USE CASE 1: View Dashboard & All Active Demands

### 👤 Actor
**Demand Manager / HR Team Lead**

### 📝 Description
A demand manager opens the iDemand Simulator application to get a quick overview of all active demands across the organization and understand the current status distribution.

### 🎯 Preconditions
- User has access to the application
- Application is running and connected to the system
- At least 5 demands exist in the system

### 📋 Main Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | User navigates to application home page | Page loads with header "iDemand Simulator POC" |
| 2 | User observes the Dashboard Overview section | Three status counters are visible showing: Completed (1), In Progress (1), Pending (3) |
| 3 | User sees the demands grid below filters | All 5 demands are displayed as cards in a grid layout |
| 4 | User reviews individual card details | Each card shows Tracking No, Skills, Created Date, OT Status, SR Status, and Billing Date |
| 5 | User observes color coding | Cards are color-coded: 1 Green (Completed), 1 Amber (In Progress), 3 Red (Pending) |

### ✨ Expected Outcomes
- Dashboard provides quick insights into demand statuses
- User can see all 5 demands at a glance
- Status distribution is clearly visible with color coding
- Demands are organized in a clean grid layout

### 🔴 Postconditions
- Dashboard remains loaded
- User has clear visibility of all demands
- Counters accurately reflect current demand status

### 🎭 Alternative Scenarios

#### Scenario A: No Demands Available
- If no demands exist in the system
- Empty state message is displayed: "No demands found"
- Dashboard counters show 0 for all statuses

#### Scenario B: Large Number of Demands
- If more than 5 demands exist (future enhancement)
- Pagination or scroll functionality enables viewing all demands
- Performance remains smooth with all demands loaded

### 📝 Notes
- This is the primary entry point for all users
- Dashboard should load within 2 seconds
- Color coding must be immediately recognizable

---

## ✅ USE CASE 2: Search for Specific Demands

### 👤 Actor
**Demand Specialist / Resource Manager**

### 📝 Description
A resource manager needs to find a specific demand quickly using the search functionality. They can search by Tracking Number or required skills to locate relevant demands.

### 🎯 Preconditions
- Application is loaded with all demands visible
- Search functionality is enabled
- At least one demand exists matching the search criteria

### 📋 Main Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | User clicks on the search input field | Search field becomes active with cursor blinking |
| 2 | User types "TRK-001" | Search query appears in the input field |
| 3 | System filters demands in real-time | Grid updates immediately showing only TRK-001 card |
| 4 | User reviews filtered results | Only 1 demand card is displayed (TRK-001) |
| 5 | User clears search field | All 5 demands reappear in the grid |

### 🔍 Search Scenarios

#### Search Scenario 1: Search by Tracking Number
```
Input: "TRK-002"
Result: Displays only TRK-002 card
Count: 1 result
```

#### Search Scenario 2: Search by Skill
```
Input: "Java"
Result: Displays demands containing Java skill
Matching: TRK-001 (Java, Spring Boot, SQL)
Count: 1 result
```

#### Search Scenario 3: Partial Skill Match
```
Input: "React"
Result: Displays demands containing React skill
Matching: TRK-002 (ReactJS, HTML, CSS, JS)
Count: 1 result
```

#### Search Scenario 4: No Results
```
Input: "Python"
Result: Empty state message displayed
Message: "No demands found matching your filters."
Count: 0 results
```

#### Search Scenario 5: Case-Insensitive Search
```
Input: "java" or "JAVA" or "Java"
Result: All variations return same results
Consistency: Search is case-insensitive
```

### ✨ Expected Outcomes
- Real-time search results (no page refresh needed)
- Both Tracking Number and Skill searches work correctly
- Search is case-insensitive
- Performance remains fast with instant results
- Empty state is shown when no results match

### 🔴 Postconditions
- Demands remain filtered until search is cleared
- User can modify search query at any time
- Dashboard counters update to reflect filtered results

### 🎭 Alternative Scenarios

#### Scenario A: Multiple Skills Match
```
Input: "SQL"
Result: Shows all demands with SQL skill
Expected: TRK-001 (Java, Spring Boot, SQL) and TRK-003 (C#, .NET, SQL)
```

#### Scenario B: Special Characters
```
Input: "TRK-00#1"
Result: No results or handled gracefully
Behavior: Invalid input doesn't crash the system
```

### 📝 Notes
- Search should be instantaneous (< 100ms)
- Must work with partial matches
- Search box should have clear placeholder text

---

## ✅ USE CASE 3: Filter Demands by OT Status

### 👤 Actor
**Compliance Officer / Approval Manager**

### 📝 Description
A compliance officer needs to review demands based on their Operational Technical (OT) status. They use the OT Status filter to view only demands that match specific approval statuses.

### 🎯 Preconditions
- Application is fully loaded
- All demands are visible
- OT Status filter dropdown is accessible
- Demands have various OT statuses assigned

### 📋 Main Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | User locates "OT Status" dropdown in filters section | Dropdown is clearly labeled and visible |
| 2 | User clicks the OT Status dropdown | Dropdown opens showing all available options |
| 3 | User selects "Approve" option | Dropdown closes, only "Approve" demands display (TRK-001, TRK-002) |
| 4 | User sees filtered results | 2 cards displayed, both with Approve status |
| 5 | User changes filter to "Pending" | Dropdown updates, only TRK-003 (Pending) displays |
| 6 | User resets filter to "All" | All 5 demands reappear in grid |

### 🎯 Filter Scenarios

#### Filter Scenario 1: View Approved Demands
```
Filter Selected: "Approve"
Results: TRK-001, TRK-002
Count: 2 demands
Status: Both have OTStatus = "Approve"
```

#### Filter Scenario 2: View Pending Demands
```
Filter Selected: "Pending"
Results: TRK-003
Count: 1 demand
Status: OTStatus = "Pending"
```

#### Filter Scenario 3: View Refer Back Demands
```
Filter Selected: "Refer Back"
Results: TRK-004
Count: 1 demand
Status: OTStatus = "Refer Back"
```

#### Filter Scenario 4: View All Demands
```
Filter Selected: "All"
Results: TRK-001, TRK-002, TRK-003, TRK-004, TRK-005
Count: 5 demands (all visible)
Status: All statuses included
```

#### Filter Scenario 5: View Rejected Demands
```
Filter Selected: "Reject"
Results: None (no rejected demands in current data)
Count: 0 demands
Message: "No demands found matching your filters."
```

### ✨ Expected Outcomes
- Dropdown provides all OT status options
- Filter results update instantly
- Only matching demands are displayed
- Dashboard counters update to reflect filtered demands
- "All" option resets the filter

### 🔴 Postconditions
- Filter remains active until changed
- Combined with other filters if needed
- User can change filter multiple times

### 🎭 Alternative Scenarios

#### Scenario A: Combined with Search Filter
```
OT Status Filter: "Approve"
Search: "Java"
Result: No results (Java skills are in TRK-001, but conflicting with current filter)
Logic: Filters work together with AND logic
```

#### Scenario B: Combined with SR Status Filter
```
OT Status Filter: "Approve"
SR Status Filter: "SR Created"
Result: Only TRK-001 displays
Logic: Both conditions must be met
```

### 📝 Notes
- Filter options: "All", "Pending", "Refer Back", "Resubmit", "Approve", "Reject"
- Filter should update immediately with no page refresh
- Current filter selection should remain highlighted

---

## ✅ USE CASE 4: Filter Demands by SR Status & Status Rules

### 👤 Actor
**Service Request (SR) Coordinator**

### 📝 Description
An SR Coordinator needs to track which demands have had Service Requests created and which are still pending. They use the SR Status filter to monitor the progression of demands through the SR creation process.

### 🎯 Preconditions
- Application is fully loaded
- All demands are visible
- SR Status filter dropdown is accessible
- At least one demand has "SR Created" status
- Multiple demands have "Yet to Start" status

### 📋 Main Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | User locates "SR Status" dropdown in filters section | Dropdown is clearly visible below OT Status filter |
| 2 | User clicks the SR Status dropdown | Dropdown opens showing 3 options: "All", "Yet to Start", "SR Created" |
| 3 | User selects "SR Created" option | Only TRK-001 is displayed (GREEN card - fully completed) |
| 4 | User observes the single result | Card shows OTStatus: Approve + SRStatus: SR Created |
| 5 | User changes filter to "Yet to Start" | All other 4 demands display |
| 6 | User sees billing dates for SR Created demand | TRK-001 shows actual billing start date, others show N/A |

### 🔐 Status Rules Validation

#### Rule 1: SR Created Allowed ONLY with Approve Status
```
Scenario: TRK-001
OTStatus: Approve ✅
SRStatus: SR Created ✅
Result: Valid - Demand is FULLY COMPLETED (GREEN)
```

#### Rule 2: SR Created NOT Allowed with Other OT Statuses
```
Scenario: TRK-003 (if we tried to set SR Created)
OTStatus: Pending ❌
SRStatus: SR Created ❌ (NOT ALLOWED)
Result: Invalid - SR Created cannot be set
System Behavior: Prevent or ignore this invalid state
```

#### Rule 3: Yet to Start Works with All OT Statuses
```
Scenarios:
TRK-001: Approve + Yet to Start ✅ (AMBER - In Progress)
TRK-002: Approve + Yet to Start ✅ (AMBER - In Progress)
TRK-003: Pending + Yet to Start ✅ (RED - Pending)
TRK-004: Refer Back + Yet to Start ✅ (RED - Pending)
TRK-005: Resubmit + Yet to Start ✅ (RED - Pending)
```

### 📊 Filter Scenarios

#### Filter Scenario 1: View SR Created Demands Only
```
Filter Selected: "SR Created"
Results: TRK-001
Count: 1 demand
Expected Status: Approved + SR Created = COMPLETED (GREEN)
Billing Date: Present (2026-03-10)
```

#### Filter Scenario 2: View Yet to Start Demands
```
Filter Selected: "Yet to Start"
Results: TRK-002, TRK-003, TRK-004, TRK-005
Count: 4 demands
Expected Status: Mix of Approve + Pending + Refer Back + Resubmit
Billing Date: All show N/A (not started)
```

#### Filter Scenario 3: View All SR Status Demands
```
Filter Selected: "All"
Results: TRK-001, TRK-002, TRK-003, TRK-004, TRK-005
Count: 5 demands
Expected Status: All statuses included
Billing Date: Only TRK-001 has actual date, others N/A
```

### ✨ Expected Outcomes
- SR Status filter displays only valid status combinations
- Rule validation ensures data integrity
- Dashboard counters accurately reflect SR status filtering
- Billing dates only appear for SR Created demands
- Filter logic prevents invalid status combinations

### 🔴 Postconditions
- Filter remains applied until changed
- System maintains status rule constraints
- No invalid demands appear in results

### 🎭 Alternative Scenarios

#### Scenario A: Combined OT + SR Status Filters
```
OT Status: "Approve"
SR Status: "SR Created"
Result: Only TRK-001 (GREEN - Completed)
Business Logic: Most restrictive filter result
```

#### Scenario B: Combined OT + SR Status Filters (Amber)
```
OT Status: "Approve"
SR Status: "Yet to Start"
Result: Only TRK-002 (AMBER - In Progress)
Business Logic: Valid combo for in-progress demands
```

#### Scenario C: No Results from Combined Filters
```
OT Status: "Pending"
SR Status: "SR Created"
Result: Empty state (0 demands)
Reason: SR Created not allowed with Pending status
```

### 📝 Notes
- **Critical Rule**: SR Created is ONLY valid when OT Status = "Approve"
- This rule is automatically enforced by the system
- System prevents creation of invalid state combinations
- Status rules ensure data consistency

---

## ✅ USE CASE 5: Export Filtered Demands & Generate Reports

### 👤 Actor
**Business Analyst / Reporting Manager**

### 📝 Description
A business analyst uses the filtered view of demands to analyze trends and generate reports. They export the currently visible (filtered) demands for further analysis in spreadsheet tools or reporting systems.

### 🎯 Preconditions
- Application is loaded with demands
- At least one demand is visible in current filter
- Export functionality is available
- User has read permissions

### 📋 Main Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | User applies desired filters | Demands are filtered based on search and status criteria |
| 2 | User observes current filtered results | Dashboard shows reduced set of demands matching filters |
| 3 | User clicks "Export Filtered Results" button* | Export menu appears with format options |
| 4 | User selects "CSV" format | File is generated and downloaded to user's computer |
| 5 | User opens CSV in Excel/Sheets | All demand data is properly formatted and readable |
| 6 | User performs analysis on exported data | Data can be sorted, charted, and analyzed further |

*Note: Export functionality would be added as an enhancement

### 📊 Export Scenarios

#### Scenario 1: Export All Demands
```
Current Filter: "All" demands
Export Format: CSV
Exported Columns:
  - Tracking No
  - Skills (comma-separated)
  - Created Date
  - OT Status
  - SR Status
  - Billing Start Date
  - Completion Status (calculated)
  - Color Code (for reference)

Rows: 5 demands
File Name: demands_all_2026-03-25.csv
```

#### Scenario 2: Export Filtered by Status
```
Current Filter: OT Status = "Approve"
Export Format: CSV
Exported Rows: 2 demands (TRK-001, TRK-002)
Analysis Possible: Focus on approved demands only
```

#### Scenario 3: Export Search Results
```
Current Filter: Search = "Java"
Export Format: CSV
Exported Rows: 1 demand (TRK-001)
Analysis: Deep dive into specific skill requirements
```

#### Scenario 4: Export with Status Summary
```
Export Format: PDF Report
Included Sections:
  - Dashboard Overview (counters)
  - Demand Details Table
  - Status Distribution Chart
  - Color Code Legend
  - Generated Date & Time
  - Filter Applied Information

Content: Summary of all filtered demands
```

### 📈 Report Insights Generated

#### Report 1: Status Distribution Report
```
Completed (GREEN):    1 demand  (20%)
In Progress (AMBER):  1 demand  (20%)
Pending (RED):        3 demands (60%)

Insight: 60% of demands are pending, needs attention
Action: Escalate Pending demands to management
```

#### Report 2: Skills Requirement Analysis
```
Most Demanded Skills:
  1. SQL           - 2 demands (40%)
  2. Java          - 1 demand  (20%)
  3. C#/.NET       - 1 demand  (20%)
  4. ReactJS       - 1 demand  (20%)

Insight: SQL expertise is in high demand
Action: Allocate more resources for SQL professionals
```

#### Report 3: Timeline Analysis
```
Average Days in "Pending": 15 days
Average Days to Complete: 10 days (TRK-001)
Fastest Approval: TRK-001 (9 days from creation)

Insight: Process is efficient for approved items
Action: Investigate why others remain pending
```

#### Report 4: Billing Impact Report
```
Active Billing: 1 demand (TRK-001)
Potential Billing (if approved): 4 demands
Revenue Impact if All Approved: 4x current revenue
Timeline to All Approved: Unknown

Insight: Significant revenue opportunity
Action: Expedite approval process
```

### ✨ Expected Outcomes
- Filtered data is easily accessible for export
- Multiple export formats are available (CSV, PDF, JSON)
- All relevant demand information is included
- Exported files are ready for external tools
- Reports provide actionable insights

### 🔴 Postconditions
- Original filtered view remains on screen
- User can perform additional exports
- Audit trail records the export action (optional)

### 🎭 Alternative Scenarios

#### Scenario A: Export Empty Results
```
Current Filter: "Reject" status (no rejected demands)
User Action: Attempts to export
Result: Warning message shown
Message: "No demands match current filters. Export cancelled."
Behavior: System prevents export of empty results
```

#### Scenario B: Export with Timestamp
```
File Generated: demands_filtered_2026-03-25_14-30-45.csv
Includes: Exact timestamp of export
Purpose: Track when report was generated
Audit: Enables audit trail functionality
```

#### Scenario C: Batch Export Multiple Filters
```
User Action: Save frequently used filter combinations
Export: Pre-saved "Approve + SR Created" filter
Result: Quick export of common report
Efficiency: Reduces time for routine reporting
```

### 📝 Notes
- Export should preserve all demand data
- Date formats should be ISO standard (YYYY-MM-DD)
- Skills should be comma-separated in export
- File naming should include timestamp for versioning
- Users should be able to export even if only 1 demand visible

---

## 📊 Cross-Use Case Flows

### Flow 1: Complete Demand Review Process
```
1. User loads dashboard (USE CASE 1)
2. Observes status overview - sees many pending
3. Filters by OT Status = "Approve" (USE CASE 3)
4. Further searches for "Java" skills (USE CASE 2)
5. No results found
6. Changes search to "C#" (USE CASE 2)
7. Finds TRK-003, reviews details
8. Exports results for stakeholder review (USE CASE 5)
```

### Flow 2: SR Status Verification & Export
```
1. User loads dashboard (USE CASE 1)
2. Filters by SR Status = "SR Created" (USE CASE 4)
3. Sees only TRK-001 (GREEN - Completed)
4. Verifies status rules are working correctly (USE CASE 4)
5. Exports verified demand (USE CASE 5)
6. Sends report to management
```

### Flow 3: Skill-Based Demand Identification
```
1. User searches for specific skill (USE CASE 2)
2. Multiple demands appear with that skill
3. Filters by completion status (USE CASE 3, 4)
4. Identifies completed vs pending for that skill
5. Exports skill-specific report (USE CASE 5)
6. Analyzes resource allocation
```

---

## 📈 Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Search Performance** | < 100ms | Time to display results |
| **Filter Response** | < 50ms | Dropdown interaction time |
| **Export Time** | < 2s | Time to generate CSV |
| **Page Load Time** | < 2s | Initial dashboard load |
| **User Satisfaction** | 90%+ | Feedback score |
| **Error Rate** | < 1% | Failed operations |

---

## 🔄 Future Enhancements

1. **Advanced Export Formats**: PDF reports, Excel with charts
2. **Scheduled Reports**: Automated weekly/monthly exports
3. **Email Integration**: Send reports directly via email
4. **API Integration**: Connect to backend systems
5. **Demand Creation**: Add new demands through UI
6. **Demand Editing**: Modify existing demand details
7. **Bulk Operations**: Update multiple demands at once
8. **Notifications**: Alert users of status changes
9. **Audit Logging**: Track all user actions
10. **Role-Based Access**: Different permissions per user type

---

**Document Version**: 1.0.0  
**Last Updated**: March 25, 2026  
**Status**: Final