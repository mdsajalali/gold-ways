flowchart TD
    A[App Launch] --> B{User Status}
    B --> |New User| C[Onboarding Flow]
    B --> |Existing User| D[Login/Authentication]
    
    C --> C1[Welcome Screen]
    C --> C2[KYC Registration]
    C --> C3[Preference Setup]
    C --> C4[Tutorial/Walkthrough]
    C4 --> D
    
    D --> |Authentication Successful| E[Home Dashboard]
    D --> |Authentication Failed| D1[Reset Password/Retry]
    
    E --> F{User Action}
    F --> |Portfolio Management| G[View/Manage Holdings]
    F --> |Exchange Transaction| H[Exchange Hub]
    F --> |Explore Markets| I[Market Data & Rates]
    F --> |Check Offers| J[Personalized Offers]
    F --> |Account Settings| K[User Profile/Settings]
    
    G --> G1[Buy Assets]
    G --> G2[Sell Assets]
    G --> G3[Gift/Transfer Assets]
    
    H --> H1[Currency Exchange]
    H --> H2[Metal-to-Metal Exchange]
    H --> H3[Mixed Exchange Scenarios]
    H3 --> H4[Real-time Rate Calculation]
    
    I --> I1[Price Graphs]
    I --> I2[Exchange Rates]
    I --> I3[Custom Alerts Setup]
    
    J --> J1[Partner Offers]
    J --> J2[Promotional Banners]
    J --> J3[Personalized Recommendations]
    
    K --> K1[Profile Management]
    K --> K2[Security Settings]
    K --> K3[Notification Preferences]
    K --> K4[Support/Help Center]
    
    H4 --> L[Transaction Confirmation]
    L --> M[Transaction Processing]
    M --> N[Transaction Receipt/Confirmation]
    N --> E

    