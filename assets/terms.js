import React from "react";
const termss = [
  {
    selected: false,
    header: "1. How to read this Agreement",
    body: `This Agreement contains 26 sections. The headings are for reference only. Some capitalized terms have specific definitions in section 3. 
For "Money Transfer" transactions, this Agreement applies individually to each transaction and is not a Framework Contract.
`,
  },
  {
    selected:false,
    header:'2. Why you should read this Agreement',
    body:`2.1 What this Agreement covers. These are the terms and conditions on which we provide our Services to you.
    2.2 Why you should read them. Please read this Agreement carefully before you start to use our Services. This Agreement (always together with the documents referred to in it) tells you who we are, how we will provide the Services to you, how this Agreement may be changed or ended, what to do if there is a problem and other important information.
    2.3 Other additional documents which apply to you. This Agreement refers to the following additional documents, which also apply to your use of our Services:
    (a) Our Privacy Policy, which sets out the terms on which we process any personal data we collect about you, or that you provide to us. By using our Services, you consent to such processing and you promise that all data provided by you is accurate.
    (b) Our Frequently Asked Questions ("FAQ") which provides answers to common customer questions.
    (c) In order to receive some of our Services, you may be asked to agree to additional terms and conditions (including those referred to in section 26) which we will notify you about at the relevant time.
    2.4 Additional documents. For clarity, the additional documents and the parts of this Agreement which incorporate the additional documents are not Framework Contracts.
    2.5 Future changes to this Agreement. All future changes made to this agreement at the time you sign-up for our Services are incorporated into this Agreement.
    2.6 You accept this Agreement. By visiting our Website and/or using our Services (including downloading and using our App, or via the API, a social media platform or other authorized third party), you confirm that you accept and agree to this Agreement (including the Customer Updates and the additional documents referred to above). If you do not agree, please do not use our Services.
    `
  },
  {
    selected:false,
    header:'3. Glossary',
    body:`In this Agreement:
    API means the application programming interface provided by Hike.
    App means the mobile application software, the data supplied with the software and the associated media.
    Balance means any amounts held in your Hike Account.
    Business Day means a day other than a Saturday, Sunday or a public holiday in Lebanon when financial institutions in Beirut are open for business.
    Framework Contract means a contract for payment services which governs the future execution of individual and successive payment transactions and which may contain the obligation and conditions for setting up a payment account. 
    Group Company means any entity that directly or indirectly controls, is controlled by, or is under common control with another entity.
    Hike Account means the account you have opened with us in accordance with the terms of this Agreement.
    Negative Balance means amount owed by account holder to Hike.
    Services means all products, services, content, features, technologies or functions offered by us and all related websites, applications (including the App), and services (including the Website and API).
    Source Currency means the currency which you hold and/or fund your payment order with.
    Target Currency means the currency which your recipient will receive.
    Website means any webpage, including but not limited to www.hiketime.me, where we provide the Services to you.
    `
  },
  {
    selected:false,
    header:'4. Hike App and API',
    body:`4.1 App subject to this Agreement and the Appstore Rules. We license the use of the App to you on the basis of this Agreement and subject to any rules and policies applied by any Appstore provider or operator whose sites are located at App Store and Google Play. We do not sell the App to you. We remain the owners of the App at all times.
    4.2 App updates. From time-to-time updates to the App may be issued through App Store or Google Play. Depending on the update, you may not be able to use our Services via the App until you have downloaded the latest version of the App and accepted any new terms.
    4.3 Your right to use the App and the API. In consideration of you agreeing to abide by the terms of this Agreement, we grant you a non-transferable, non-exclusive license to use the App on your device and the API subject to this Agreement. We reserve all other rights.
    `
  },
  {
    selected:false,
    header:'5. Who can use our Services',
    body:`5.1 You must be 18 years or over. If you are an individual, you must be 18 years or older to use our Services and by opening a Hike Account you declare that you are 18 years or older. We may ask you at any time to show proof of your age.
    5.2 You must have authority to bind your business. If you are not a consumer, you confirm that you have authority to bind any business or entity on whose behalf you use our Services, and that business or entity accepts these terms.
    5.3 Your use of the Hike Account must not violate any applicable laws. You commit to us that your opening and/or using of a Hike Account does not violate any laws applicable to you. You take responsibility for any consequences of your breach of this section.
    `
  },
  {
    selected:false,
    header:'6. Your Hike Account',
    body:`6.1 About your Hike Account
    (a) Your Hike Account allows you to hold, send or receive electronic money/payments.
    (b) The electronic money held on your Hike Account does not expire other than when your account is closed, see section 17 for more details.
    (c) The electronic money held on your Hike Account will not earn any interest.
    (d) You may hold your electronic money in any currencies which we support from time to time.
    (e) You may withdraw money from your Hike Account at any time subject to certain conditions, please see section 16 for more details.
    (f) Certain limits may be placed on your Hike Account depending on your country of residence, verification checks or other legal considerations. 
    (g) The electronic money held on your Hike Account belongs to the person or legal entity which is registered as the Hike Account holder.
    (h) Unless you have our consent in writing, you must not allow anyone to operate your Hike Account on your behalf.
    6.2 Your electronic money in the Hike Account is issued in accordance with the Lebanese Government Regulations.
    `
  },
  {
    selected:false,
    header:'7. Getting started',
    body:`7.1 Open a Hike Account. To start using our Services, you must open a Hike Account and provide your details as prompted.
    7.2 Information must be accurate. All information you provide to us must be complete, accurate and truthful at all times. You must update this information whenever it changes. We cannot be responsible for any financial loss arising out of your failure to do so. We may ask you at any time to confirm the accuracy of your information and/or provide additional supporting documents.
    7.3 Transacting on your own account. All activities under a Hike Account shall be deemed as activities carried out by the registered user. You shall only use the Services to transact on your own account and not on behalf of any other person or entity.
    7.4 One account per person or entity. You may only open one Hike Account unless we have agreed in writing the opening of additional accounts. Hike may refuse the creation of duplicate accounts for the same user. Where duplicate accounts are detected, Hike may close or merge these duplicate accounts at its sole discretion.
    `
  },
  {
    selected:false,
    header:'8. Getting to know you',
    body:`8.1 We are required by law to carry out all necessary security and customer due diligence checks on you (including any parties involved in your transaction for example, your recipient) in order to provide any Services to you. You agree to comply with any request from us for further information and provide such information in a format acceptable to us. In addition, you agree that we may make, directly or through any third party, any inquiries we consider necessary to validate the information you provided to us, including checking commercial databases or credit reports. You authorize us to obtain one or more of your credit reports, from time to time, to establish, update, or renew your Hike Account with us or in the event of a dispute relating to this Agreement and activity under your Hike Account.`
  },
  {
    selected:false,
    header:'9. Keep your Hike Account safe',
    body:`9.1 Keep your Hike Account safe
    (i) What to do. You must:
    (a) Change your password regularly and ensure that it isn’t reused across other online accounts.
    (b) Contact Customer Support if anyone asks for your Hike password.
    (c) Always follow recommended password management practice, for example: https://support.google.com/accounts/answer/32040?hl=en.
    (d) Set up 2-step authentication where prompted (for further instructions please refer to our FAQ).
    (e) Keep your e-mail account secure. You may reset your Hike Account password using your email address. Let Customer Support know immediately if your email address becomes compromised.
    (ii) What NOT to do. You must NOT:
    (a) Disclose your Hike Account password. Keep it safe.
    (b) Let anyone access your Hike Account or watch you accessing it.
    (c) Use any functionality that allows your login details or passwords to be stored by the computer or browser you are using or to be cached or otherwise recorded.
    (d) Do anything which may in any way avoid or compromise the 2-step authentication process.
    9.2 Contact us if you suspect your Hike Account has been compromised. If you suspect your Hike Account or other security credentials are stolen, lost, used without your authorization or otherwise compromised, you must contact Customer Support immediately, you are also advised to change your password. Any undue delays in notifying us may affect the security of your Hike Account and also result in you being responsible for financial losses.
    `
  },
  {
    selected:false,
    header:'10. Uploading money into your Hike Account',
    body:`10.1 How to upload money into your Hike Account. Uploading money to your Hike account happens through a transfer that you receive from another Hike account, like an agent or another shopper.
    10.2 Payin Methods. The only payin method currently available to Hike users is cash. You would pay cash to an agent or another Hike user who transfers that same amount to your Hike account. Your account would be debited with amount instantly.
    10.3 Upload limits on your Hike Account. For legal and security reasons, we impose limits on how much you can upload into your Hike Account.
    `
  },
  {
    selected:false,
    header:'11. Sending money',
    body:`11.1 Setting up your payment order Your order may either be:
    (a) a "Payment" which is a payment towards a store from the list of stores in the store tab. The amount you indicate will be deducted from your account, less any discount the store has offered its shoppers, and added to the store account instantly; or
    (b) a "Transfer" which is a transfer where you indicate that you wish to send a fixed amount of money to your recipient from the amount in your principal Hike account.
    11.2 Information you need to provide to set up a payment order. To set up a payment order via your Hike Account, you need to provide your recipient’s Hike account number or phone number and the amount to be transferred.
    11.3 Payment order limits. We may place limits on the amount you may send per transfer.
    11.4 When is your payment order received. If you and the recipient are properly connected to the internet, your payment order should not take more than a few seconds to arrive to its destination.
    11.5 What happens after you have submitted your payment order. Once we have received your payment order, we will display it under the history section of your Hike account. Each payment order is given a unique transaction number which you can find there. You should quote this number when communicating with us about a particular payment order.
    11.6 You need to provide us with sufficient funds before we can process your payment order. We will only process your payment order if we hold or have received sufficient cleared funds in your Hike Account. It is your responsibility to fund your payment order in a timely manner. 
    11.7 You may cancel your payment order before your funds are transferred.  You cannot cancel your payment order once your funds have been transferred into the recipient account.
    11.8 You must ensure the information you provide to us is correct. You must make sure that the information you provide when setting up a payment order is accurate. If we have processed your order in accordance with the information you have provided to us it will be considered correctly completed even if you have made a mistake.
    11.13 What happens if you provide us with incorrect information. If you provide incorrect information with your payment order, we will use reasonable efforts to recover the funds for you, and may need to charge you a fee for that.
    `
  },
  {
    selected:false,
    header:'12. Receiving money',
    body:`12.1 The money received is shown in your Hike Account. Any money you receive into your Hike Account will be recorded in the transaction history section of your Hike Account. You should check the incoming funds in your Hike Account against your own records regularly and let us know if there are any irregularities.`
  },
  {
    selected:false,
    header:'13. Maintaining your Hike Account',
    body:`13.1 Transaction history is displayed on your Hike Account. All your transactions (including your current Balance, money you have uploaded, received, sent and/or withdrawn) are recorded in the transaction history section of your Hike Account. You may access this information after you log in to your Hike Account. We have allocated a reference number to each transaction; you should quote this reference number when communicating with us about a particular transaction.
    13.2 Check your Hike Account regularly. You must check your Hike Account regularly and carefully and contact us immediately if you don’t recognize a transaction or think we have made a payment incorrectly. You must tell us about any unauthorized or incorrectly executed transactions immediately, but no later than 13 months from the transaction; otherwise, you may not be entitled to have any errors corrected.
    13.3 Negative balances. If your Hike Account goes into a negative amount, including as a result of a overdraft benefit or advance offered by Hike, that negative amount represents an amount you owe to Hike and you promise to repay the negative amount immediately without any notice from us. We may send you reminders or take such other reasonable actions to recover the negative amount from you, for example, we may use a debt collection service or take further legal actions. We may charge you for any costs we may incur as a result of these collection efforts.
    13.4 Taxes. You are responsible for any taxes which may be applicable to payments you make or receive, and it is your responsibility to collect, report and pay the correct tax to the appropriate tax authority.
    `
  },
  {
    selected:false,
    header:'14. Withdrawing from your Hike Account',
    body:`14.1 You can request to withdraw your money. You can withdraw any amount from your principal Hike account at no extra fee. All you need to do is contact your nearest agent and transfer the amount you want to cash out to the agent’s account and receive that same amount in cash.
    14.2 You must provide correct information to us. When setting up your withdrawal request, you must ensure that the information you provide is correct and complete. We will not be responsible for money sent to the wrong recipient as a result of incorrect information provided by you. If you have provided wrong information to us, you may ask us to assist you in recovering the money, but we cannot guarantee that such efforts will be successful.
    `
  },
  {
    selected:false,
    header:'15. How much will you pay?',
    body:`15.1 You must pay our fees. You must pay the fees in connection with the use of our Services. We will not process your transaction until we have received the fees from you.
    15.2 You can see our fee structure on the Pricing page. We will let you know the exact amount payable by you when you set up your order. You can see our fee structure on the "Pricing" page. For clarity, the fees applicable to you as set out on the "Pricing" page forms part of this Agreement which may be subject to change as set out in section 26.
    15.3 We can make deductions from your Hike Account. You agree that we are authorized to deduct our fees, any applicable reversal amounts, and/or any amounts you owe us from your HIke Account. If you don’t have enough money in your Hike Account to cover these amounts, we may refuse to execute the relevant transaction or provide any Services to you.
    `
  },
  {
    selected:false,
    header:'16. Closing your Hike Account',
    body:`16.1 You may close your Hike Account at any time. You may end this Agreement and close your Hike Account at any time by contacting our Customer Support.
    16.2 You should withdraw your money within a reasonable time. At the time of closure, if you still have money in your Hike Account, you must withdraw your money within a reasonable period of time by following the steps described in section 16. After a reasonable period of time, you will no longer have access to your Hike Account, but you can still withdraw your money by contacting Customer Support. You have the right to do this for a period of 6 years from the date your Hike Account is closed.
    16.3 You must not close your Hike Account to avoid an investigation. You must not close your Hike Account to avoid an investigation. If you attempt to close your Hike Account during an investigation, we may hold your money until the investigation is fully completed in order to protect our or a third party’s interest.
    16.4 You are responsible for your Hike Account after closure. You agree that you will continue to be responsible for all obligations related to your Hike Account even after it is closed.
    `
  },
  {
    selected:false,
    header:'17. Intellectual property rights',
    body:`17.1 While you are using our Services, you may use the Hike Materials only for your personal use and solely as necessary in relation to those Services.
    17.2 "Hike Materials" include any software (including without limitation the App, the API, developer tools, sample source code, and code libraries), data, materials, content and printed and electronic documentation (including any specifications and integration guides) developed and provided by us or our affiliates to you, or available for download from our Website. You may not, and may not attempt to, directly or indirectly:
    a.	transfer, sublicense, loan, sell, assign, lease, rent, distribute or grant rights in the Service or the Hike Materials to any person or entity;
    b.	remove, obscure, or alter any notice of any of our trade marks, or other "intellectual property" appearing on or contained within the Services or on any Hike Materials;
    c.	modify, copy, tamper with or otherwise create derivative works of any software included in the Hike Materials; or
    d.	reverse engineer, disassemble, or decompile the Hike Materials or the Services or apply any other process or procedure to derive the source code of any software included in the Hike Materials or as part of the Services.
    
    `
  },
  {
    selected:false,
    header:'18. Our responsibility for loss or damage',
    body:`18.1 We are responsible to you for foreseeable loss and damage caused by us. If we do not reasonably meet our commitments to you, we are responsible for loss or damage you suffer that is a foreseeable result of our breaking this contract or our failing to use reasonable care and skill. We are not responsible for any loss or damage that is not foreseeable. Loss or damage is foreseeable if either it is obvious that it will happen or if, at the time the contract was made, both we and you knew it might happen, for example, if you discussed it with us during your account sign up process.
    18.2 We do not exclude or limit in any way our liability to you where it would be unlawful to do so. This includes liability for death or personal injury caused by our negligence or the negligence of our employees, agents or subcontractors; for fraud or fraudulent misrepresentation.
    18.3 We are not liable for business losses. If you use our Services for any commercial or business purpose we will have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.
    18.4 We are not liable for technological attacks. We will not be liable for any loss or damage caused by a virus, or other technological attacks or harmful material that may infect your computer equipment, computer programs, data or other proprietary material related to your use of our Services.
    18.5 We have no control over websites linked to and from our Website. We assume no responsibility for their content or any loss or damage that may arise from your use of them.
    18.6 Our liability to you for unauthorized payments or our mistake. In case of an unauthorized payment or mistake due to our error, we shall at your request immediately refund the payment amount including all fees deducted by us. This shall not apply:
    (a) where your Hike Account, or its personalized security features, are lost, stolen or misappropriated. 
    (b) if you have acted fraudulently, in which case we will not refund you in any circumstances;
    (c) if you do not quickly notify us of security issues on your Hike Account (e.g. loss of your password), you remain liable for losses incurred up to your notification to us;
    (d) if the payment transaction was unauthorized but you have with intent or gross negligence compromised the security of your Hike Account or failed to comply with your obligations to use your Hike Account in the manner set out in this Agreement. In such a case you shall be solely liable for all losses; or
    (e) if you don’t let us know about the unauthorized or incorrectly completed transaction within 13 months from the date of the payment transaction.
    18.7 You are responsible for checking your Hike Account regularly. We rely on you to regularly check the transactions history of your Hike Account and to contact Customer Support immediately in case you have any questions or concerns.
    18.8 We are not liable for things which are outside of our control. We (and our affiliates) cannot be liable for our inability to deliver or delay as a result of things which are outside our control.
    18.9 You are liable for breaking this Agreement or applicable laws. In the event of loss, claims, costs or expenses (including reasonable legal fees) arising out of your breach of this Agreement, any applicable law or regulation and/or your, or any authorized third parties’, use of our Services, you agree to defend, compensate us and our affiliates and hold us harmless. This provision will continue after our relationship ends.
    18.10 What happens if you owe us money? In the event you are liable for any amounts owed to us, we may immediately remove such amounts from your Hike Account (if available). If there are insufficient funds in your Hike Account to cover your liability, we reserve the right to collect your debt to us by using any payments received in your Hike Account and otherwise you agree to reimburse us through other means. We may also recover amounts you owe us through other collection avenues, including, without limitation, through the use of a debt collection agency. We may recover all reasonable costs or expenses (including reasonable attorneys' fees and expenses) incurred in connection with the enforcement of this Agreement.
    `
  },
  {
    selected:false,
    header:'19. Accessing our services',
    body:`19.1 We will try to make sure our Services are available to you when you need them. However, we do not guarantee that our Services will always be available or be uninterrupted. We may suspend, withdraw, discontinue or change all or any part of our Service without notice. We will not be liable to you if for any reason our Services are unavailable at any time or for any period. You are responsible for making all arrangements necessary for you to have access to our Services. If you have granted permission to a third party to access your account, we may refuse access to that third party if we are concerned about unauthorized or fraudulent access by that third party. We will give you notice if we do this, either before or immediately after we refuse access, unless notifying you would be unlawful or compromise our reasonable security measures.`
  },
  {
    selected:false,
    header:'20. Information security',
    body:`20.1 You are responsible for configuring your information technology, computer programs and platform in order to access our Services. You should use your own virus protection software. We cannot guarantee that our Services will be free from bugs or viruses.
    20.2 You must not misuse our Services. You must not misuse our Services by introducing viruses, trojans, worms, logic bombs or other materials which are malicious or technologically harmful. You must not attempt to gain unauthorized access to our Website, our servers, computers or databases. You must not attack our Website with any type of denial-of-service attack. By breaching this provision, you would commit a criminal offence under the Lebanese Law. We will report any such breach to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our Website and/or our Services will cease immediately.
    `
  },
  {
    selected:false,
    header:'21. Linking to our site',
    body:`21.1 You may link to our Website provided you follow certain rules. You may link to our Website, provided:
    (a) you do so in a way that is fair and legal and does not damage our reputation or take advantage of it;
    (b) you do not suggest any form of association, approval or endorsement on our part where none exists;
    (c) you do not frame our Website on any other site.
    We reserve the right to withdraw linking permission without notice.
    `
  },
  {
    selected:false,
    header:'22. When we can end this Agreement or suspend our Services',
    body:`22.1 We may end this Agreement by giving you two months’ notice. We may end this Agreement and close your Hike Account or any service associated with it by giving you two months’ prior notice.
    22.2 We may suspend or close your Hike Account without notice in certain circumstances. We may at any time suspend or close your Hike Account and/or end this Agreement without notice if:
    (a) you breach any provision of this Agreement or documents referred to in this Agreement;
    (b) we are requested or directed to do so by any competent court of law, government authority, public agency, or law enforcement agency;
    (c) we have reason to believe you are in breach of any applicable law or regulation; or
    (d) we have reason to believe you are involved in any fraudulent activity, money laundering, terrorism financing or other criminal or illegal activity.
    22.3 We may suspend your Hike Account for security reasons. We may suspend your Hike Account or restrict its functionality if we have reasonable concerns about:
    (a) the security of your Hike Account; or
    (b) suspected unauthorized or fraudulent use of your Hike Account.
    22.4 We will give you notice of suspension where possible. We will give you notice of any suspension or restriction and the reasons for such suspension or restriction as soon as we can, either before the suspension or restriction is put in place, or immediately after, unless notifying you would be unlawful or compromise our reasonable security measures. We will lift the suspension and/or the restriction as soon as practicable after the reasons for the suspension and/or restriction have ceased to exist.
    22.5 You cannot use the App if this Agreement ends. On termination for any reason all rights granted to you in connection with the App shall cease, you must immediately delete or remove the App from your devices.
    `
  },
  {
    selected:false,
    header:'23. Our right to make changes',
    body:`23.1 We may change this Agreement by giving you at least two (2) months’ prior written notice. If we do this, you can terminate this Agreement immediately by providing written notice to us during the notice period. If we do not hear from you during the notice period, you will be considered as having accepted the proposed changes and they will apply to you from the effective date specified on the notice.
    23.2 In some instances, we may change this Agreement immediately. Despite section 26.1, changes to this Agreement which are (1) more favorable to you; (2) required by law; or (3) related to the addition of a new service, extra functionality to the existing Service; or (4) changes which neither reduce your rights nor increase your responsibilities, will come into effect immediately if they are stated in the change notice. Changes to exchange rates shall come into effect immediately without notice and you shall not have the right to object to such a change.
    `
  },
  {
    selected:false,
    header:'24. How we may contact you',
    body:`24.1 We usually contact you via email. For this purpose, you must at all times maintain at least one valid email address in your Hike Account profile. You should check for incoming messages regularly and frequently; these emails may contain links to further communication on our Website. If you don’t maintain or check your email and other methods of communications, you will miss emails about your transactions and our Services. We cannot be liable for any consequence or loss if you don’t do this. If we have reasonable concerns either about the security of your Wise Account, or any suspected or actual fraudulent use of your Hike Account, we will contact you via telephone, email, or both (unless contacting you would be unlawful or compromise our reasonable security measures).
    24.2 Other ways we may contact you. In addition to communicating via email, we may contact you via letter or telephone where appropriate. If you use any mobile services, we may also communicate with you via SMS. Any communications or notices sent by:
    a.	Email will be deemed received by you on the same day if it is received in your email inbox before 5pm on a Business Day. If it is received in your email inbox after 5pm on a Business Day or at any other time, it will be deemed received on the next Business Day.
    b.	SMS will be deemed received the same day.
    24.3 Where legislation requires us to provide information to you on a durable medium, we will either send you an email (with or without attachment) or send you a notification pointing you to information on our Website in a way that enables you to retain the information in print format or other format that can be retained by you permanently for future reference. Do keep copies of all communications we send or make available to you.
    24.4 If you need a copy of the current Agreement or any other relevant document, please contact Customer Support.
    24.5 This Agreement is made in the English language. Documents or communications in any other languages are for your convenience and only the English language version of them is official.
    `
  },
  {
    selected:false,
    header:'25. Complaints',
    body:`25.1 If you have any complaints about us or our Services, , please contact Customer Support.`
  },
  {
    selected:false,
    header:'26. Other important terms',
    body:`26.1 Nobody else has any rights under this Agreement. This Agreement is between you and us. No other person shall have any rights to enforce any of its terms. Neither of us will need to get the agreement of any other person in order to end or make any changes to this Agreement.
    26.2 We may transfer this Agreement to someone else. You may not transfer, assign, mortgage, charge, subcontract, declare a trust over or deal in any other manner with any or all of your rights and obligations under this Agreement (including the Hike Account) without our prior written consent. We reserve the right to transfer, assign or novate this Agreement (including the Hike Account) or any right or obligation under this Agreement at any time without your consent. This does not affect your rights to close your Hike Account under section 17.
    26.3 If a court finds part of this Agreement illegal, the rest will continue in force. Each of the paragraphs of this Agreement operates separately. If any court or relevant authority decides that any of them are unlawful, the remaining paragraphs will remain in full force and effect.
    26.4 Even if we delay in enforcing this Agreement, we can still enforce it later. If we delay in asking you to do certain things or in taking action, it will not prevent us taking steps against you at a later date.
    26.5 This Agreement supersedes any other previous agreements. This Agreement supersedes and extinguishes all previous agreements between you and Hike, whether written or oral, relating to its subject matter.
    26.6 Which laws apply to this Agreement and where you may bring legal proceedings. This Agreement is governed by Lebanese law. Any dispute between you and us in connection with your Hike Account and/or this Agreement may be brought in the courts of the Lebanese Republic.
    `
  },
];

export default termss;
