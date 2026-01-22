import { Issue, CampaignNav } from './types';

// Global Constants
export const NAV_LINKS: CampaignNav[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Issues', href: '#issues' },
  //{ name: 'Ask Faith', href: '#ask' },
  { name: 'Contact', href: '#contact' },
];

export const CAMPAIGN_NAME = "Faith For Caldwell";
export const OFFICE = "Caldwell County Commissioner";
export const SLOGAN = "Grow Together";
export const FOOTER_PAID_FOR_BY = "Paid for by The Committee to Elect Faith Naff, Faith Naff, Treasurer, Caldwell County, NC";


// About Section Constants
export const ABOUT_TITLE = "The Skills and Compassion to Lead Differently";
export const ABOUT_QUOTE = "What we've been doing for years clearly isn't working. It's time for a new approach.";
export const ABOUT_DESCRIPTION_1 = "Faith was born in Eastern Tennessee and raised in the North Carolina High Country. She graduated from Appalachian State University in 2009.";
export const ABOUT_DESCRIPTION_2 = "As an experienced business manager and industrial engineer, Faith has the skillset and unique perspective to tackle the issues facing Caldwell County. She brings with her an eye for increasing efficiency and maximizing the utility of available resources.";
export const ABOUT_DESCRIPTION_3 = "Faith is fighting for a Caldwell County where we can all grow together.";
export const ABOUT_BLURB_TITLE_1 = "EXPERIENCE";
export const ABOUT_BLURB_DESC_1 = "15+ years of business management, industrial engineering, and efficiency consulting.";
export const ABOUT_BLURB_TITLE_2 = "ROOTS";
export const ABOUT_BLURB_DESC_2 = "Born and raised in the Appalachian Mountains.";

// CTA Section
export const CTA_TEXT = "Ready to make a difference in Caldwell County?";
export const CTA_DONATE_TEXT = "Donate";

// Issues Section Constants
export const ISSUE_SECTION_TITLE = "The Path Forward";
export const ISSUE_SECTION_DESCRIPTION = "Focusing on the foundations that make Caldwell County a place where we can truly grow together.";
export const ISSUES: Issue[] = [
  {
    id: 'economy',
    title: 'Budgetary Transparency',
    description: 'Ensuring Caldwell County residents know how their tax money is being spent.',
    icon: "fa-chart-line"
  },
  {
    id: 'environment',
    title: 'Affordable Housing',
    description: 'Fighting to keep the dream of home ownership alive.',
    icon: "fa-mountain-sun"
  },
  {
    id: 'education',
    title: 'Investing in Our Children',
    description: 'Making sure our schools have the resources they need to give our kids a bright future.',
    icon: "fa-school"
  },
  {
    id: 'infrastructure',
    title: 'Attracting New Business',
    description: 'As America fights to bring manufacturing home, Faith will push to ensure Caldwell County isn\'t left out.',
    icon: "fa-bridge"
  }
];


// Contact Section Constants
export const CONTACT_TITLE = "Let's Connect";
export const CONTACT_DESCRIPTION = "Your voice matters to this campaign. Whether you want to volunteer, display a yard sign, or just share your ideas for our county, we're listening.";
export const CONTACT_EMAIL_TITLE = "Email";
export const CONTACT_EMAIL = "faithnaff@outlook.com";
export const CONTACT_HEADQUARTERS_TITLE = "Headquarters";
export const CONTACT_HEADQUARTERS_ADDRESS = "Granite Falls, North Carolina";
export const CONTACT_FORM_TITLE = "Send a Message";
export const CONTACT_FORM_BUTTON_TEXT = "Send Message";


