flowchart TD

    Start([User Opens App])
    Start --> Home[Dashboard]

    Start --> Explore[Explore Tab]
    Start --> Offers[Offers Tab]
    Start --> Service[Service Tab]
    Start --> Account[Account Tab]

    Home --> Overview[View Portfolio Overview]
    Home --> QuickActions[Perform Quick Actions]
    Home --> RecentTransactions[View Recent Transactions]
    Home --> Notifications[Check Notifications]

    Explore --> MarketData[View Market Trends & Graphs]
    Explore --> PortfolioGraphs[Check Asset Trends]
    Explore --> ExchangeCalculator[Use Exchange Calculator]
    Explore --> Alerts[Set Alerts for Rates]
    Explore --> Watchlist[Manage Watchlist]

    Offers --> FeaturedOffers[View Featured Offers]
    Offers --> PersonalizedOffers[Check Personalized Offers]
    Offers --> PartnerOffers[Explore External Partner Deals]

    Service --> ExchangeHub[Access Exchange Hub]
    ExchangeHub --> CurrencyToCurrency[Convert Currency to Currency]
    ExchangeHub --> CurrencyToMetal[Convert Currency to Metal]
    ExchangeHub --> MetalToMetal[Convert Metal to Metal]

    Service --> GoldLoan[Apply for Gold Loan]
    Service --> LoanEligibility[Check Loan Eligibility]
    Service --> LoanSchedule[View Loan Repayment Schedule]

    Service --> GoldRental[Rent Gold to Bank]
    GoldRental --> RentalCalculator[Calculate Rental Income]
    GoldRental --> RentalStatus[Check Rental Status]

    Service --> Withdrawals[Make Withdrawals]
    Withdrawals --> GoldToCash[Withdraw Gold as Cash]
    Withdrawals --> MerchantMap[Find Authorized Merchants]

    Account --> Profile[View/Update Profile]
    Account --> Settings[Manage Notifications & Security]
    Account --> Support[Access Support & FAQs]

    QuickActions --> End([Action Completed])
    MarketData --> End
    ExchangeHub --> End
    GoldLoan --> End
    GoldRental --> End
    Withdrawals --> End
    Offers --> End
    Account --> End
![image](https://github.com/user-attachments/assets/d89c0088-82c4-464d-b9e4-81df7cb388be)
