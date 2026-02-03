const commonStopWords = [
    // articles & connectors
    'the', 'is', 'are', 'was', 'were', 'a', 'an', 'and', 'or', 'but',
    'to', 'of', 'in', 'on', 'for', 'with', 'by', 'from', 'as', 'at',

    // pronouns
    'we', 'you', 'they', 'he', 'she', 'it', 'our', 'us', 'your',

    // helpers
    'this', 'that', 'these', 'those', 'there', 'here', 'such',
    'will', 'shall', 'can', 'could', 'should', 'may', 'might'
];

const jdStopWords = [
    // job description boilerplate
    'experience', 'skill', 'skills', 'responsibility', 'responsibilities',
    'requirement', 'requirements', 'qualification', 'qualifications',
    'role', 'job', 'position', 'candidate', 'developer', 'engineer',
    'professional', 'team', 'work', 'working', 'looking', 'seeking',

    // generic expectations
    'ability', 'knowledge', 'understanding', 'strong', 'good', 'excellent',
    'preferred', 'required', 'minimum', 'years'
];

const companyStopWords = [
    // company branding noise
    'company', 'organization', 'business',
    'mission', 'vision', 'values', 'culture',
    'growth', 'innovation', 'success',
    'customers', 'clients', 'solutions', 'services',
    'world', 'global', 'industry'
];

const STOP_WORDS = new Set([
    ...commonStopWords,
    ...jdStopWords,
    ...companyStopWords
]);

export default STOP_WORDS;
