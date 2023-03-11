import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'My works',
    paragraph: '_____________________'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                REACT • REDUX • JAVASCRIPT • CYPRESS • TAILWIND CSS
                  </div>
                <h3 className="mt-0 mb-12">
                Change Your World
                  </h3>
                <p className="m-0">
                This is responsive web application for a non-profit organization. It consist of multiple pages some of them require to sign up or sign in or you need to be authorized to access some content. This project uses data that is coming from a RESTful API.
               </p>
               <br />
               <div className="reveal-from-bottom" data-reveal-delay="600">
                  <ButtonGroup>
                    <Button tag="a" target="_blank" rel="noopener noreferrer" color="primary" wideMobile href="https://cyw-corporate-frontend-bbpe-p20fflamb-team-01-frontend.vercel.app/">
                      Live version
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/cyw.gif')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  React • TypeScript • styled-components • Firebase • vite
                </div>
                <h3 className="mt-0 mb-12">
                Time Tracker
                  </h3>
                <p className="m-0">
                Time Tracker is a web application that allows users to log the hours worked for each day and displays the total number of hours worked. It is designed to be simple and easy to use, with a clean and intuitive interface.
                </p>
                <br />
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" target="_blank" rel="noopener noreferrer" color="primary" wideMobile href="https://time-tracker-delta.vercel.app/">
                        Live version
                      </Button>
                      <Button tag="a" target="_blank" rel="noopener noreferrer" color="dark" wideMobile href="https://github.com/TimmyChan99/time-tracker/">
                        Source Github
                      </Button>
                    </ButtonGroup>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/time-tracker.gif')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                REACT • JAVASCRIPT • FIREBASE • TAILWIND CSS • REACT-SPRING
                  </div>
                <h3 className="mt-0 mb-12">
                Insight
                  </h3>
                <p className="m-0">
                This is a blog app where users can read articles and posts of others. If you want to post or write an article you need to register or sign up.
                  </p>
                  <br />
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" target="_blank" rel="noopener noreferrer" color="primary" wideMobile href="https://timmychan99.github.io/insights/">
                        Live version
                      </Button>
                      <Button tag="a" target="_blank" rel="noopener noreferrer" color="dark" wideMobile href="https://github.com/TimmyChan99/insights">
                        Source Github
                      </Button>
                    </ButtonGroup>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/insights2.gif')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                NodeJS • JavaScript • CSS • Axios • HTML
                  </div>
                <h3 className="mt-0 mb-12">
                eJob
                  </h3>
                <p className="m-0">
                Job search app that list the recent jobs in Canada, UK, USA. the user can get the list of jobs by entering the keyworks related to th position, the location such as city, province or state, and the select the country.
                </p>
                  <br />
                  <div className="reveal-from-bottom" data-reveal-delay="600">
                    <ButtonGroup>
                      <Button tag="a" target="_blank" rel="noopener noreferrer" color="primary" wideMobile href="https://job-search-app-frontend.vercel.app/">
                        Live version
                      </Button>
                      <Button tag="a" target="_blank" rel="noopener noreferrer" color="dark" wideMobile href="https://github.com/TimmyChan99/job-search-app">
                        Source Github
                      </Button>
                    </ButtonGroup>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/ejob.gif')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
