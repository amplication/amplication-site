import FeatureItem from '../components/Sections/Features/FeatureItem';
import GraphQLIcon from '../public/images/features-page/icons/nenu_graphql_icon.svg';
import GraphQLImage from '../public/images/features-page/graphql.svg';
import RestIcon from '../public/images/features-page/icons/menu_rest_icon.svg';
import RestImage from '../public/images/features-page/rest_api.svg';
import IdentityIcon from '../public/images/features-page/icons/menu_identity_icon.svg';
import IdentityImage from '../public/images/features-page/identity_permissions.svg';
import AdminIcon from '../public/images/features-page/icons/menu_admin_ui_icon.svg';
import AdminImage from '../public/images/features-page/admin-ui.svg';
import CodeGenerationIcon from '../public/images/features-page/icons/menu_code_generation_icon.svg';
import CodeGenerationImage from '../public/images/features-page/code_generation.svg';
import CustomCodeIcon from '../public/images/features-page/icons/custom_code_icon.svg';
import CustomCodeImage from '../public/images/features-page/custom-code.svg';
import CLIIcon from '../public/images/features-page/icons/menu_version_control_icon.svg';
import CLIImage from '../public/images/features-page/command-line-interface.svg';
import DeploymentIcon from '../public/images/features-page/icons/menu_deployment_icon.svg';
import DeploymentImage from '../public/images/features-page/deployment.svg';
import OpenSourceIcon from '../public/images/features-page/icons/menu_open_source_icocn.svg';
import OpenSourceImage from '../public/images/features-page/open_source.svg';
import integrationIcon from '../public/images/features-page/icons/menu_integration_icon.svg';
import integrationImage from '../public/images/features-page/integration_webhooks.svg';
import versionControlIcon from '../public/images/features-page/icons/menu_version_control_icon.svg';
import versionControlImage from '../public/images/features-page/version_control.svg';
import syncGithubIcon from '../public/images/features-page/icons/github.svg';
import syncGithubImage from '../public/images/features-page/sync_with_github.svg';
import {NextSeo} from 'next-seo';
import {MainLayout} from '../layouts';
import helpers from '../helpers';

const Features = () => {
  const features = [
    {
      id: 'graphql',
      icon: GraphQLIcon,
      image: GraphQLImage,
      iconClass: 'feature-page-icon first-color',
      title: 'Instant GraphQL',
      content:
        'Amplication generates production-ready, self-documenting GraphQL\n' +
        '                API for all your data models. The API is generated with\n' +
        '                authentication and authorization of your choice already\n' +
        '                baked-in.<br/><br/>\n' +
        '                The GraphQL server is built with Apollo Server and provides all\n' +
        '                the features that shipped with it. Easily grow and customize your\n' +
        '                GraphQL API with your business and connect to it from any GraphQL\n' +
        '                client.',
      buttons: [],
    },
    {
      id: 'restapi',
      icon: RestIcon,
      image: RestImage,
      iconClass: 'feature-page-icon',
      title: 'REST API',
      content:
        'Easily connect to your data with any HTTP client using REST API.\n' +
        '              Amplication generates production-ready REST API, with Swagger UI\n' +
        '              documentation, for all your data models.\n' +
        '              <br /><br />\n' +
        '              The API is generated with authentication and authorization of your\n' +
        '              choice already baked-in. The REST API is built with strict RESTful\n' +
        '              conventions and can be easily extended and customized.',
      buttons: [],
    },
    {
      id: 'identity-permissions',
      icon: IdentityIcon,
      image: IdentityImage,
      iconClass: 'feature-page-icon third-color',
      title: 'Identity & Permissions',
      content:
        'Save time on plugging in authentication and authorization to your\n' +
        '              apps. Amplication provides a role-based permission model that is\n' +
        '              generated automatically with your app.\n' +
        '              <br /><br />\n' +
        '              Create as many roles as needed and granularly set permissions per\n' +
        '              data model or specific fields for different roles. All the\n' +
        '              permissions are automatically enforced in the REST and GraphQL\n' +
        '              APIs including response filtering on specific fields.\n' +
        '              <br /><br />\n' +
        '              Choose one or more of the built-in authentication providers, and\n' +
        '              get your generated Node.js app with built-in support both on \n' +
        '              server-side and client-side.',
      buttons: [],
    },
    {
      id: 'admin-ui',
      icon: AdminIcon,
      image: AdminImage,
      iconClass: 'feature-page-icon first-color',
      title: 'React Admin UI',
      content:
        'Start working with your application in minutes. Amplication\n' +
        '              generates a React client with ready-made forms for creating and\n' +
        '              editing all the data models of your application.\n' +
        '              <br /><br />\n' +
        '              The React app is pre-configured to work with your back-end and\n' +
        '              already has all the boilerplate and foundation for your client,\n' +
        '              including - routing and navigation, authentication, permissions,\n' +
        '              menu, breadcrumbs, error handling, and much more.',
      buttons: [],
    },
    {
      id: 'code-generation',
      icon: CodeGenerationIcon,
      image: CodeGenerationImage,
      iconClass: 'feature-page-icon',
      title: 'Node.js Code Generation',
      content:
        'Save time on boilerplate and repetitive tasks with low-code but\n' +
        '              keep working on your core business logic with pro-code.\n' +
        '              <br /><br />\n' +
        '              Amplication is a Node.JS backend development platform.\n' +
        '              It generates human-readable and human-editable Node.JS.\n' +
        '              applications for the backend and a React application \n' +
        '              for the client.',
      buttons: [],
    },
    {
      id: 'custom-code',
      icon: CustomCodeIcon,
      image: CustomCodeImage,
      iconClass: 'feature-page-icon third-color',
      title: 'Custom Code',
      content:
        'Generated apps can be manually customized to support any complex\n' +
        '              logic, specs, or integration using custom code. Code components\n' +
        '              can be modified using any IDE, synced through GitHub, and still be\n' +
        '              maintained through Amplication engine without being overridden by\n' +
        '              any data model change or app re-generation source code.',
    },
    {
      id: 'cli',
      icon: CLIIcon,
      image: CLIImage,
      iconClass: 'feature-page-icon first-color',
      title: 'Command Line Interface (CLI)',
      content:
        'Define your data model and generate apps faster using Amplication\n' +
        '              Command Line Interface (CLI). Actions available in our data model\n' +
        '              app designer GUI version are also available through our CLI. Using\n' +
        '              Amplication CLI you can execute pre-defined long scripts which can\n' +
        '              be used as templates and as an import-export mechanism.',
    },
    {
      id: 'deployment',
      icon: DeploymentIcon,
      image: DeploymentImage,
      iconClass: 'feature-page-icon',
      title: 'Application Deployment',
      content:
        'When working with Amplication, all your committed changes are\n' +
        '              continuously deployed to a sandbox environment on the Amplication\n' +
        '              cloud so you can easily access your application for testing and\n' +
        '              development purposes.\n' +
        '              <br /><br />\n' +
        '              You can also easily build a Docker container to prepare your app\n' +
        '              for deployment. Your app is always generated with all the\n' +
        '              configuration and scripts needed to do so.',
    },
    {
      id: 'open-source',
      icon: OpenSourceIcon,
      image: OpenSourceImage,
      iconClass: 'feature-page-icon third-color',
      title: 'Open Source',
      content:
        'Amplication is an open-source project built for developers by the\n' +
        '              open-source community.\n' +
        '              Join us in building the next generation of development tools.\n' +
        '              <span><b>Any contribution counts.</span>',
      buttons: [
        {
          title: 'GitHub',
          url: 'https://github.com/amplication/amplication',
          buttonClass: 'btn btn-outline-secondary',
          iconClass: 'social-link github social-white',
        },
        {
          title: 'Join our community',
          url: 'https://amplication.com/discord',
          buttonClass: 'btn btn-primary ml-4',
          iconClass: 'social-link discord social-white',
        },
      ],
    },
    {
      id: 'integration-webhooks',
      icon: integrationIcon,
      image: integrationImage,
      iconClass: 'feature-page-icon first-color',
      title: 'Custom Code & Webhooks Integration',
      content:
        'Integration with any external service is available through custom\n' +
        '              code or webhooks. Once you generate your Node.js app based on your data\n' +
        '              model, you can add custom code and integrate it with any external app.\n' +
        '              You can also use webhooks to trigger external apps based on events\n' +
        '              or database change update.',
      buttons: [],
      isComingSoon: true,
    },
    {
      id: 'version-control',
      icon: versionControlIcon,
      image: versionControlImage,
      iconClass: 'feature-page-icon',
      title: 'Version Control',
      content:
        'Amplication has version control built-in which enables you to\n' +
        "              visually see any app change and how it's being reflected in the\n" +
        '              generated app code. The app developer has the option to cancel\n' +
        '              commits or roll back to previous versions of the app at any time.',
      buttons: [],
    },
    {
      id: 'sync-with-github',
      icon: syncGithubIcon,
      image: syncGithubImage,
      iconClass: 'feature-page-icon third-color',
      title: 'GitHub Sync',
      content:
        'Amplication can push the code of your app to a GitHub repository.\n' +
        '              Every app developed on Amplication platform is translated to a\n' +
        '              human-readable TypeScript Node.js app which can be synced with\n' +
        '              your private Github repository.\n' +
        '              <br />\n' +
        '              <span>This feature allows you to:</span><br />\n' +
        '              <ul>\n' +
        '                <li>\n' +
        '                  Continuously push your app changes to your private repository\n' +
        '                </li>\n' +
        '                <li>Keep using your favorite IDE</li>\n' +
        '                <li>\n' +
        '                  No need to learn new skills, keep developing with the\n' +
        '                  technology you master\n' +
        '                </li>\n' +
        '                <li>Control and validate changes before merge</li>\n' +
        '                <li>\n' +
        '                  Use GitHub as version control to track changes and roll back\n' +
        '                </li>\n' +
        '              </ul>',
      buttons: [],
    },
  ];

  return (
    <>
      <NextSeo
        title="GraphQL API Feature for Backend API Development | Amplication"
        description="Amplication is the most flexible open-source backend development platform for Node.JS applications. Design models and roles, deploy your app, connect with REST or GraphQL API, sync with GitHub. Built for developers, by developers."
        canonical={helpers.getCanonical('features')}
      />

      <main className="w-full font-poppins z-10 mb-12 laptop:mb-[100px] amplication-base">
        {features.map(feature => {
          return (
            <FeatureItem
              id={feature.id}
              icon={feature.icon}
              image={feature.image}
              iconClass={feature.iconClass}
              title={feature.title}
              content={feature.content}
              buttons={feature.buttons}
              isComingSoon={feature.isComingSoon}
              key={feature.id}
            />
          );
        })}
      </main>
    </>
  );
};
Features.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
export default Features;
