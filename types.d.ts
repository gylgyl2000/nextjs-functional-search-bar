interface UserProfile {
    id: number
    profile_photo: UserProfilePhoto
    identification: UserIdentification
    contact_information: UserContactInformation
    financial_information: UserFinancialInformation
    online_presence: UserOnlinePresence
    network_information: UserNetworkInformation
    employment: UserEmployment
    physical_attributes: UserPhysicalAttributes
}
interface UserProfilePhoto {
    '256x256': string
}
interface UserIdentification {
    full_name: string
    date_of_birth: string
    age: string
    gender: string
    nationality: string
}
interface UserContactInformation {
    home_address: string
    phone_number: string
    email_address: string
}
interface UserFinancialInformation {
    credit_card_number: string
    expiration_date: string
    cvv2: string
    iban: string
    swift_bic_number: string
    monthly_salary: string
}
interface UserOnlinePresence {
    username: string
    password: string
    website: string
}
interface UserNetworkInformation {
    ipv4_address: string
    mac_address: string
    user_agent: string
}
interface UserEmployment {
    occupation: string
    employer: string
    company_size: string
    industry: string
}
interface UserPhysicalAttributes {
    height: string
    weight: string
    blood_type: string
}
interface UserProfileCard {
    name: string
    email: string
    username: string
    role: string
    photo: string
}
interface iDefault {
    defaultValue: string | null
}