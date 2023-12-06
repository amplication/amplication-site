import graphql from '../../../public/images/tech/graphql.svg';
import terraform from '../../../public/images/tech/terraform.svg';
import mongo from '../../../public/images/tech/mongo.svg';
import kafka from '../../../public/images/tech/kafka.svg';
import github from '../../../public/images/tech/github.svg';
import eslint from '../../../public/images/tech/eslint.svg';
import bitbucket from '../../../public/images/tech/bitbucket.svg';
import gitlab from '../../../public/images/tech/gitlab.svg';
import k8 from '../../../public/images/tech/k8.svg';
import mysql from '../../../public/images/tech/mysql.svg';
import nestjs from '../../../public/images/tech/nestjs.svg';
import node from '../../../public/images/tech/node.svg';
import postgresql from '../../../public/images/tech/postgresql.svg';
import prettier from '../../../public/images/tech/prettier.svg';
import prisma from '../../../public/images/tech/prisma.svg';
import redis from '../../../public/images/tech/redis.svg';
import rest from '../../../public/images/tech/rest.svg';
import docker from '../../../public/images/tech/docker.svg';

const items = [
  {
    image: graphql,
    alt: 'GraphQL',
  },
  {
    image: terraform,
    alt: 'Terraform',
  },
  {
    image: mongo,
    alt: 'mongoDB',
  },
  {
    image: kafka,
    alt: 'Kafka',
  },
  {
    image: github,
    alt: 'GitHub',
  },
  {
    image: eslint,
    alt: 'ESlint',
  },
  {
    image: bitbucket,
    alt: 'Bitbucket',
  },
  {
    image: gitlab,
    alt: 'Gitlab',
  },
  {
    image: k8,
    alt: 'Kubernetes',
  },
  {
    image: mysql,
    alt: 'MySQL',
  },
  {
    image: nestjs,
    alt: 'NestJS',
  },
  {
    image: node,
    alt: 'Node.js',
  },
  {
    image: postgresql,
    alt: 'PostgreSQL',
  },
  {
    image: prettier,
    alt: 'Prettier',
  },
  {
    image: prisma,
    alt: 'Prisma',
  },
  {
    image: redis,
    alt: 'Redis',
  },
  {
    image: rest,
    alt: 'REST',
  },
  {
    image: docker,
    alt: 'Docker',
  },
];

import Image from 'next/image';
import PropTypes from 'prop-types';

const TechSlider = ({ classes }) => {
  return (
    <>
      <div className=" flex items-center  justify-center">
        <div className="w-[100%] h-20 overflow-hidden relative">
          <div className="flex items-center h-20 justify-around absolute animate  ">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex min-w-[156px] flex-row justify-center items-center whitespace-nowrap   px-3  mx-2  "
                >
                  <Image
                    width={156}
                    height={80}
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              );
            })}
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex min-w-[156px] flex-row justify-center items-center whitespace-nowrap   px-3  mx-2  "
                >
                  <Image
                    width={156}
                    height={80}
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="logotypes flex flex-wrap align-items-center animate">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-content-center w-[25%] tablet:w-[20%] laptop:w-[14.2857%]"
            >
              <Image src={item.image} alt={item.alt} />
            </div>
          );
        })}
      </div> */}
    </>
  );
};

TechSlider.propTypes = {
  classes: PropTypes.string,
};

TechSlider.defaultProps = {
  classes: '',
};

export default TechSlider;
