import Image from "next/image";

export default function privacy() {
  return (
    <main>
      <div className="relative bg-gradient-to-b from-[#0A0A37] to-[#1D204E] lg:pt-[200px] pt-[100px] overflow-hidden">
        <div className="w-[110%] mb-[-1px] mr-[0px] ml-[-5px] lg:mt-[-200px] md:mt-[-100px] mt-[-50px]">
          <Image
            width={100}
            height={100}
            className="w-[110%] h-auto"
            src="/assets/img/elements/triangle-white.svg"
            alt={""}
          />
        </div>
        <div className="bg-white">
          <div className="flex flex-col items-center pt-[50px]">
            <h2 className="caption text-dark-blue">Terms and Condition</h2>
            <span className="caption__underline"></span>
          </div>
          <div className="custom__container border-[1px] shadow-xl shadow-[#dcdcdc] mx-auto">
            <div className="text__container mx-auto my-auto text-justify px-2">
              <p className="pt-[50px]">
                These Terms of Use (“Terms“, “Terms and Conditions”) are a legal
                agreement between you, as a current or prospective customer of
                DSLA’s services (“customer”, “you,” “your”) operated by RingZero
                Networks (Thailand) Co., Ltd (”DSLA,” “we,” “our” or “us”), a
                company incorporated under the Laws of Thailand, and govern your
                use of DSLA’s services, including mobile applications, websites,
                software, cloud-based solutions, and other products and services
                (collectively, the “Services”). By using any of the Services,
                you agree to these Terms. If you are using the Services on
                behalf of a business, you represent to us that you have
                authority to bind that business or entity to these Terms, and
                that business accepts these Terms. Please read all of our Terms
                carefully before using our Services.
              </p>
              <h3>DSLA Account & Registration</h3>
              <p>
                To lawfully use our Services, you must be at least at the age
                your country of residence defines as the least age to offer
                information services.
              </p>
              <p>
                Customer must provide accurate and complete personal
                information, in response to our questions, during registration
                and keep the information current.
              </p>
              <p>
                You must open an account with us (a “DSLA Account”) to use the
                Services. During registration we will ask you for information,
                which may include but is not limited to, your name and other
                personal information. DSLA grants you a limited, non-exclusive,
                non-transferable, revocable license to use the Services. You are
                fully responsible for all activity that occurs under your DSLA
                Account, including for any changes made, and the input of
                modification of or access to any data or information in your
                account, as well as any actions taken by persons to whom you
                have granted access to the DSLA Account.
              </p>
              <p>
                A “DSLA Account Partner” is any person or entity that a Customer
                authorizes to use the Service on its behalf. This includes
                employees and personnel of the Customer who are authorized to
                use the Services on the Customer’s behalf, but also includes
                support partners and third parties with whom a Customer shares
                its DSLA account details.
              </p>
              <p>
                You control each DSLA Account Partner’s level of access to the
                Services at all times and can revoke or change DSLA Account
                Partner’s access, or level of access, at any time and for any
                reason, in which case that person or entity will cease to be a
                DSLA Account Partner or shall have the different level of
                access, as the case may be.
              </p>
              <p>
                If:
                <br />
                (a) you are a DSLA Account Partner using or accessing the
                Services for the benefit of an Customer, then you are
                responsible for ensuring you have the right to do so from the
                relevant Customer (including all necessary authorizations to
                access, amend or remove data, or make changes to the Customer's
                account); or
                <br />
                (b) you are a Customer, then you are responsible for authorizing
                use or access of the Services by any DSLA Account Partner and
                will indemnify RingZero Networks (Thailand) Co., Ltd against any
                claims or loss relating to any DSLA Account Partner's use of or
                access to your account.
              </p>
              <p>
                You acknowledge and agree that, if there is any dispute between
                a Customer and a DSLA Account Partner regarding access to
                Services, the Customer shall decide what access or level of
                access to the relevant Data or Services that DSLA Account
                Partner shall have, if any. We will have no responsibility to
                anyone other than the Customer, and the Services and these Terms
                are intended solely for the benefit of the Customer and not for
                any DSLA Account Partner(s).
              </p>
              <p>
                We reserve the right to change the account type, suspend or
                terminate the DSLA Account of anyone who provides inaccurate,
                untrue, or incomplete information, or who fails to comply with
                the account registration requirements.
              </p>
              <h3>DSLA Account Cancellation</h3>
              <p>
                We can cancel or suspend your account at any time on written
                notice to you. Such termination will be effective at the end of
                your then-current paid-up subscription period. We may also
                cancel or suspend your account immediately if, in our sole
                discretion:
              </p>
              <ul>
                <li>
                  you have committed a material or persistent breach of these
                  Terms or any other terms applying to your use of the Services;
                </li>
                <li>
                  we consider that provision of the Services, or use of them, in
                  your territory or jurisdiction will or is likely to breach any
                  applicable law;
                </li>
                <li>
                  we decide to withdraw the Services from your territory or
                  jurisdiction altogether; or
                </li>
                <li>
                  your use of the account is creating a security or availability
                  risk for RingZero Networks (Thailand) Co., Ltd or our other
                  customers, is impacting (or may impact) the stability or
                  performance of our systems.
                </li>
                <li>
                  you have accessed or monitored any material or information on
                  any DSLA system using any manual process or robot, spider,
                  scraper, or other automated means.
                </li>
                <li>
                  you have used and benefited from the Services via rental,
                  lease, timesharing, service bureau or other arrangement.
                </li>
                <li>
                  you have used the Services for any illegal activity or goods
                  or in any way that exposes you, other DSLA users, our
                  partners, or DSLA to harm.
                </li>
              </ul>
              <p>
                You are entitled to cancel your account with DSLA at any time.
                If you cancel your account before the end of your current paid
                up month or year, your cancellation will take effect at the end
                of your then-current paid-up subscription period.
              </p>
              <p>
                If your account is cancelled, your account will be deactivated
                and all of your rights granted under these Terms will come to an
                end when your then-current paid-up subscription period is over
                (except to the extent that it is necessary for them to continue
                in respect of our ongoing storage of your data up to the date of
                permanent deletion). We are not liable for any loss or damage
                following, or as a result of, cancellation of your account, and
                <span className="font-extrabold text-red-500">
                  {" "}
                  it is your responsibility to ensure that any content or data
                  which you require is exported, backed-up or replicated before
                  cancellation.
                </span>
              </p>
              <h3>Data Protection</h3>
              <p>
                We will maintain appropriate technical and organizational
                measures to protect the security of the data or content that you
                input into the Services.
              </p>
              <p>
                You are responsible for complying with all applicable data
                protection laws in respect of your use of the Services and with
                regard to any instructions you issue to DSLA with regard to the
                processing of personal data you provide to DSLA through the
                Services. In particular, you must ensure you have properly
                informed and obtained all necessary rights, authorizations or
                consents from any end-users, consumers, personnel or other
                individuals to whom the data relates, to enable DSLA to lawfully
                access their personal data under these Terms and to process
                their personal data outside of their country of residence.
              </p>
              <h3>Revisions & Disclosures</h3>
              <p>
                From time to time, DSLA may add, make changes to or remove
                altogether features or functionality of the Services. If you're
                using Services, you may need to install a new or updated version
                before you can receive the benefit of those changes. We may also
                decide to cease providing all or some of the Services at any
                time, and nothing in these Terms is to be taken as a guarantee
                that the any Services will always be available, either in its
                current form or at all, or that we will support, maintain or
                continue to offer the Services or any version of them.
              </p>
              <p>
                DSLA can make updates to our Terms of Use at any time, and we
                will notify you of these updates as appropriate. By continuing
                to use our services after these updates, you agree to the
                revised terms.
              </p>
              <h3>Disclaimers</h3>
              <p>
                THE USE OF THE SERVICES IS CARRIED OUT AT YOUR OWN RISK. THE
                SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE". THE USE OF
                SERVICES DOES NOT PROVIDE ANY WARRANTIES, EXPRESS, IMPLIED, OR
                STATUTORY, INCLUDING (WITHOUT LIMITATION) IMPLIED
                NON-INFRINGEMENT WARRANTIES. THE USE OF SERVICES DOES NOT
                PROVIDE ANY WARRANTIES THAT (I) SERVICES WILL MEET ALL YOUR
                REQUIREMENTS, (II), SERVICES WILL WORK IN AN UNINTERRUPTED,
                SECURE, OR ERROR-FREE FASHION, (III) THE RESULTS THAT MAY BE
                OBTAINED FROM USING SERVICES, WILL BE ACCURATE OR RELIABLE OR
                (IV) THE QUALITY OF ANY PRODUCTS, SERVICES, INFORMATION, OR
                OTHER MATERIAL PURCHASED FROM MERCHANTS USING DSLA WILL MEET ALL
                YOUR REQUIREMENTS.
              </p>
              <p className="pb-[50px]">
                YOU UNDERSTAND AND AGREE THAT BY USING SERVICES, YOU ALONE ARE
                RESPONSIBLE AND SHALL NOT HOLD RINGZERO NETWORKS (THAILAND) CO.,
                LTD LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL DAMAGES, OR
                DAMAGES FOR LOSS OF PROFITS, INCLUDING (WITHOUT LIMITATION) LOSS
                OF REPUTATION, USE OF PERSONAL DATA OR OTHER INTANGIBLES ON THE
                BASIS OF THE AGREEMENT, OFFENSES, NEGLIGENCE, STRICT LIABILITY
                OR OTHERWISE (WITHOUT LIMITATION), RESULTING FROM: (I) THE USE
                OR INABILITY TO USE SERVICES; (II) SPENDING ON GOODS, THEIR
                REPLACEMENT AND/OR OTHER AS A RESULT OF DATA, INFORMATION,
                COMMUNICATIONS RECEIVED FROM DSLA AND/OR OTHERWISE; (III)
                UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR COMMUNICATIONS OR
                DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD-PARTY USING
                SERVICES; OR (V) ANY OTHER MATTER RELATING TO THE USE OF
                SERVICES.
              </p>
            </div>
          </div>
          <div className="w-[110%] mb-[-1px] mr-[0px] ml-[-5px]">
            <Image
              width={100}
              height={100}
              className="w-[110%] h-auto"
              src="/assets/img/elements/triangle-dark-blue.svg"
              alt={""}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
