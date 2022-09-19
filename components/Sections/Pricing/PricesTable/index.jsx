import Button from "../../../Common/Button";
import Chip from "../../../Common/Chip";
import Image from "next/image";
import greenItemCheck from "../../../../public/images/green-item-check.svg";
import dash from "../../../../public/images/dash.svg";

const childStyle = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
};
const spacer = { flex: 1 };

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
      "- Plugins",
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
      features: ["✅", "-", "-", "✅", "-", "-", "-", "-", "Community"],
      cta: {
        text: "Try for free",
        href: "https://app.amplication.com/",
      },
    },
    {
      name: "Enterprise",
      className: "highlight",
      description: "Tailored plans for your needs",
      features: ["✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅", "Enterprise"],
      cta: {
        text: "Contact Us",
        onClick: () => Intercom("show"),
      },
    },
  ];

  return (
    <>
      <section className="bg-transparent">
        <div className="w-full max-w-container m-container p-container laptop:max-w-container-desktop laptop:m-container-desktop laptop:p-container-desktop">
          <div className="row d-flex">
            <div className="d-none d-lg-block col-12">
              <table className="pricing-table">
                <thead>
                  <tr height="1">
                    <td></td>
                    {plans.map((plan, i) => (
                      <td
                        key={i}
                        className={plan.className}
                      >
                        <div style={childStyle}>
                          <h3 className="inline-content">
                            {plan.name}
                            {plan.oss && <Chip>open-source</Chip>}
                          </h3>
                          <p>{plan.description}</p>
                          <span style={spacer}></span>
                          <PricesTableCTA cta={plan.cta} />
                        </div>
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
            </div>

            <div className="d-lg-none col-12">
              {plans.map((plan, i) => (
                <div key={i}>
                  <table className="pricing-table">
                    <thead>
                      <tr>
                        <td></td>
                        <td className={plan.className}>
                          {plan.oss && <Chip>open-source</Chip>}
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
