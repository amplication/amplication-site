import Button from "../../../Common/Button";
import Image from "next/image";
import greenItemCheck from "../../../../public/images/green-item-check.svg";
import dash from "../../../../public/images/dash.svg";
import ImgOpenSourceDown from "../../../../public/images/pricing/open-source-down.svg";
import ImgOpenSourceLeft from "../../../../public/images/pricing/open-source-left.svg";

const PricesTableCTA = ({ cta }) => {
  return cta.href ? (
    <Button
      text={cta.text}
      className="outline-button"
      isLink={true}
      isAlignFull={true}
      href={cta.href}
    />
  ) : (
    <Button
      text={cta.text}
      backgroundColor="purpleBright"
      hoverBackgroundColor="purpleBrightHover"
      isLink={false}
      isAlignFull={true}
      onClick={cta.onClick}
    />
  );
};

const PricesFeatures = ({ content }) => {
  switch (content) {
    case "✅":
      return <Image src={greenItemCheck} alt="Green Checkmark" />;
    case "✅*":
      return (
        <>
          <Image src={greenItemCheck} alt="Green Checkmark" /> <span>*</span>
        </>
      );
    case "-":
      return <Image src={dash} alt="Dash" />;
    default:
      return content;
  }
};

const PricesTable = () => {
  const features = [
    [
      "Core backend functionality:",
      "- Database",
      "- Roles & permissions",
      "- GraphQL & REST APIs",
      "- Admin UI",
      "- Docker",
      "- Custom code",
    ],
    "Self managed/ on-prem",
    "Private plugins",
    "Continuous sync with GitHub",
    "CI & Git bot",
    "Audit logs",
    "SSO",
    "2FA (two-factor authentication)",
    "Support",
  ];
  const plans = [
    {
      name: "Community",
      oss: true,
      description: "Perfect for open-source projects",
      features: ["✅", "✅", "✅", "-", "-", "-", "-", "-", "Community"],
      cta: {
        text: "Try for free",
        href: "https://app.amplication.com/",
      },
    },
    {
      name: "Free Cloud",
      description: "Awesome for individuals and small teams",
      features: ["✅", "-", "-", "✅", "✅*", "-", "-", "-", "Community"],
      cta: {
        text: "Try for free",
        href: "https://app.amplication.com/",
      },
      partial: true,
    },
    {
      name: "Enterprise",
      className: "bg-black80",
      description: "Perfect for open-source projects",
      features: ["✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅", "Enterprise"],
      cta: {
        text: "Contact Us",
        onClick: () => Intercom("show"),
      },
    },
  ];

  return (
    <>
      <section className="bg-transparent page-2">
        <div className="container-custom">
          <div className="row d-flex">
            <div className="d-none d-lg-block">
              <table>
                <thead>
                  <tr>
                    <td></td>
                    {plans.map((plan, i) => (
                      <td key={i} className={plan.className}>
                        <h3 className="inline-content">
                          {plan.name}
                          {plan.oss && (
                            <>
                              &nbsp;
                              <Image
                                src={ImgOpenSourceLeft}
                                alt="Open Source"
                              />
                            </>
                          )}
                        </h3>
                        <p>{plan.description}</p>
                        <PricesTableCTA cta={plan.cta} />
                      </td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, i) => (
                    <tr key={i}>
                      <td>
                        {Array.isArray(feature) ? (
                          feature.map((str, o) => (
                            <p className="m-0" key={o}>
                              {str}
                            </p>
                          ))
                        ) : (
                          <p className="m-0">{feature}</p>
                        )}
                      </td>
                      {plans.map((plan, o) => (
                        <td key={o} className={plan.className}>
                          <PricesFeatures content={plan.features[i]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    {plans.map((plan, i) => (
                      <td key={i} className={plan.className}>
                        <PricesTableCTA cta={plan.cta} />
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
              <div className="mt-4">
                <p className="text-left">* Partial</p>
              </div>
            </div>

            <div className="d-lg-none">
              {plans.map((plan, i) => (
                <div key={i}>
                  <table>
                    <thead>
                      <tr>
                        <td></td>
                        <td className={plan.className}>
                          {plan.oss && (
                            <Image src={ImgOpenSourceDown} alt="Open Source" />
                          )}
                          <h3>{plan.name}</h3>
                          <p>{plan.description}</p>
                          <PricesTableCTA cta={plan.cta} />
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      {features.map((feature, o) => (
                        <tr key={o}>
                          <td>
                            {Array.isArray(feature) ? (
                              feature.map((str, u) => (
                                <p className="m-0" key={u}>
                                  {str}
                                </p>
                              ))
                            ) : (
                              <p className="m-0">{feature}</p>
                            )}
                          </td>
                          <td className={plan.className}>
                            <PricesFeatures content={plan.features[o]} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td></td>
                        <td className={plan.className}>
                          <PricesTableCTA cta={plan.cta} />
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  {plan.partial && (
                    <div className="mt-4">
                      <p className="text-left">* Partial</p>
                    </div>
                  )}
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricesTable;
