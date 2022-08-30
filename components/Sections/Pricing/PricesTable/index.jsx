import Link from "next/link";
import PriceItem from "../../../Common/PriceItem";

const PricesTable = () => {
  const priceItems = [
    {
      name: 'Community',
      price: 'Free!',
      description: 'Great for open-source projects, and free for lifetime',
      features: [
        'Generate and own your code',
        'Unlimited public apps',
        '2 Developers',
        '3 Roles',
        '1 Sandbox environment',
        '5 Deployments to sandbox per day',
        'Github integration with public repos',
      ],
      withButton: false,
    },
    {
      name: 'Pro',
      price: `$0 <span class="pricing-plan__instead"> $40 /month </span>`,
      description: 'Awesome for individuals and small teams',
      features: [
        'Everything in Community plan',
        '5 Private apps',
        '4 Developers',
        '3 Roles per app',
        '3 Sandbox environments',
        '50 Deployments to sandbox per day',
        'Github integration with private repos',
      ],
      withButton: false,
    },
    {
      name: 'Business',
      price: `$0 <span class="pricing-plan__instead"> $199 /month </span>`,
      description: 'Perfect for small businesses and larger teams',
      features: [
        'Everything in Pro plan',
        '10 Private apps',
        '10 Developers',
        '10 Roles per app',
        '5 Sandbox environments',
        '250 Deployments to sandbox per day',
        'Continuous Integration to private cloud',
        'Dedicated solutions architect',
      ],
      withButton: false,
    },
    {
      name: 'Enterprise',
      price: `Let's talk`,
      description: 'Price customized based on your needs',
      features: [
        'Unlimited Private apps',
        'Unlimited developers',
        'Unlimited Roles',
        'Unlimited sandbox environments',
        'Unlimited deployments to sandbox per day',
        'Enterprise support and SLA',
      ],
      withButton: true,
    },
  ];

  return (
    <>
      <section className="bg-transparent page-2">
        {(priceItems.length > 0) &&
          <div className="container-custom container-pricing">
            <div className="row d-flex align-items-end align-items-md-center">
              <div className="col-12">
                <div className="pricing-plans">
                  {priceItems.map((item, index) => {
                    return (
                      <PriceItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        features={item.features}
                        withButton={item.withButton}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    </>
  )
}

export default PricesTable