import Button from "../../../Common/Button";

const PricesTableCTA = ({ cta }) => {
  return cta.href ? (
    <Button
      text={cta.text}
      backgroundColor="purpleBright"
      hoverBackgroundColor="purpleBrightHover"
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
    },
    {
      name: "Enterprise",
      className: "bg-black80",
      description: "Perfect for open-source projects",
      features: ["✅", "✅", "✅", "✅", "✅", "✅", "✅", "✅", "Enterprise "],
      cta: {
        text: "Contact Us",
        onClick: () => Intercom("show"),
      },
    },
  ];

  return (
    <>
      <section className="bg-transparent page-2">
        {plans.length > 0 && (
          <div className="container-custom">
            <div className="row d-flex">
              <table>
                <thead>
                  <tr>
                    <td></td>
                    {plans.map((plan, i) => (
                      <td key={i} className={plan.className}>
                        <h3>{plan.name}</h3>
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
                          {plan.features[i]}
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
          </div>
        )}
      </section>
    </>
  );
};

export default PricesTable;
