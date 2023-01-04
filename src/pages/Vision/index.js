import React from "react";

import { Column, Stack, Row, Text, Button, Img } from "components";
import { useNavigate } from "react-router-dom";

const VisionPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/careers");
  }
  function handleNavigate1() {
    navigate("/solutions");
  }
  function handleNavigate2() {
    navigate("/careers");
  }
  function handleNavigate5() {
    navigate("/");
  }
  function handleNavigate6() {
    navigate("/solutions");
  }
  function handleNavigate7() {
    navigate("/careers");
  }

  return (
    <>
      <Column className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[22px] pb-[33px] w-[100%]">
        <Stack className="h-[2072px] relative w-[100%]">
          <Column
            className="absolute bg-cover bg-no-repeat flex flex-col justify-start sm:p-[15px] md:p-[34px] p-[50px] top-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_group3.png')" }}
          >
            <Column className="flex flex-col items-center justify-start sm:mb-[290px] md:mb-[375px] mb-[546px] md:ml-[13px] ml-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                  <Text
                    className="common-pointer font-normal not-italic text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={handleNavigate5}
                  >
                    Syntics App Development Pvt. Ltd.
                  </Text>
                  <Text
                    className="common-pointer sm:ml-[193px] md:ml-[250px] ml-[430px] not-italic text-white_A700 w-[auto]"
                    variant="body1"
                    onClick={handleNavigate6}
                  >
                    Solutions
                  </Text>
                  <Text
                    className="sm:ml-[23px] md:ml-[30px] ml-[44px] not-italic text-red_A200 w-[auto]"
                    variant="body1"
                  >
                    Vision
                  </Text>
                  <Text
                    className="common-pointer sm:ml-[23px] md:ml-[30px] ml-[44px] not-italic text-white_A700 w-[auto]"
                    variant="body1"
                    onClick={handleNavigate7}
                  >
                    Careers
                  </Text>
                </Row>
                <Text
                  className="sm:mt-[52px] md:mt-[67px] mt-[98px] not-italic text-white_A700 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Our Mission
                </Text>
                <Text
                  className="font-regular leading-[normal] text-justify sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] text-white_A700 sm:w-[100%] w-[95%]"
                  as="h5"
                  variant="h5"
                >
                  Application services that are innovation-driven. Complex
                  application landscapes with a mix of legacy systems, digital,
                  and SaSS use an excessive amount of IT resources for the
                  majority of businesses and limit their capacity to spur
                  development. Our application services assist you in rapidly
                  and agilely re-imagining your application landscape while
                  continuously innovating to create commercial value.
                </Text>
              </Column>
            </Column>
          </Column>
          <Column className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[91%]">
            <Row className="bg-black_901 border border-gray_400 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center pr-[105px] sm:pr-[15px] md:pr-[72px] w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] md:p-[116px] sm:p-[15px] p-[170px] sm:w-[100%] w-[44%]"
                style={{ backgroundImage: "url('images/img_group17.png')" }}
              >
                <Text
                  className="font-normal md:mb-[128px] mb-[187px] px-6 sm:mb-[99px] md:mt-[112px] mt-[164px] sm:mt-[87px] not-italic text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Our Story
                </Text>
              </Column>
              <Text
                className="font-normal leading-[normal] text-justify ml-[116px] md:ml-[79px] sm:mx-[0] not-italic text-gray_400 sm:w-[100%] w-[47%]"
                variant="body2"
              >
                {`The sole focus of Syntics App Development's operations is on the needs of its partners and clients. Since you are our first concern, it is our duty to give you the ideal setting in which to realise your aspirations. It is crucial to precisely assess how much a business-led solution influences the perception that potential partners and clients have of the quality of the company in today's quickly expanding global economy. Now that the entire world is accessible with just a click, Syntics App Development is here to make your consumers' clicks worthwhile!`}
                <br />​<br />
                {`Syntics App Development intends to give you the chance to participate in Europe's developing industries, giving you a competitive advantage in the market as your company's reach expands throughout Europe's top cities. Additionally, Syntics App Development will provide you with the most recent knowledge, analysis, and data so you can accurately predict the market demand for your product. It must be said that our clients come first, which is why we provide you with a combination of creative and economical solutions.`}
              </Text>
            </Row>
            <Row className="bg-black_901 border border-gray_400 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end pl-[117px] sm:pl-[15px] md:pl-[80px] w-[100%]">
              <Text
                className="font-normal leading-[normal] text-justify mt-[185px] sm:mt-[74px] md:mt-[95px] sm:mx-[0] not-italic text-gray_400 sm:w-[100%] w-[47%]"
                variant="body2"
              >
                A leader in the Data-Driven method and the founder and CEO of
                Syntics App Development, Jay Pratap has years of experience
                developing AI algorithms and statistical models for Mobile and
                Web Applications. Jay is a major proponent of an organization
                investing in data to produce useful insights. He supports a
                client-first culture, focuses on steady growth, and has a
                demonstrated history of serving numerous clients in diverse
                market categories.
                <br />
                {`Jay is proficient in people management, public speaking, international trade, import-export, and negotiation. strong professional from Mathura's GLA University.`}
              </Text>
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center justify-end ml-[113px] md:ml-[77px] sm:mx-[0] md:p-[112px] sm:p-[15px] p-[163px] sm:w-[100%] w-[45%]"
                style={{ backgroundImage: "url('images/img_group16.png')" }}
              >
                <Text
                  className="font-normal leading-[normal] md:mb-[106px] px-10 mb-[155px] sm:mb-[82px] md:mt-[117px] mt-[171px] sm:mt-[91px] not-italic text-white_A700 w-[100%]"
                  as="h5"
                  variant="h5"
                >
                  Experienced
                  <br />
                  Leadership
                </Text>
              </Column>
            </Row>
          </Column>
        </Stack>
        <Column className="flex flex-col items-center justify-start max-w-[1202px] ml-[auto] mr-[auto] mt-[127px] sm:mt-[67px] md:mt-[87px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <Text
                  className="leading-[normal] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[52%]"
                  as="h6"
                  variant="h6"
                >
                  Syntics App Development
                  <br />
                  Private Limited
                </Text>
                <Column className="flex flex-col justify-start md:ml-[146px] ml-[213px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                  <Text
                    className="common-pointer not-italic text-white_A700 w-[auto]"
                    variant="body1"
                    onClick={handleNavigate1}
                  >
                    Solutions
                  </Text>
                  <Text
                    className="sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-red_A200 w-[auto]"
                    variant="body1"
                  >
                    Vision
                  </Text>
                </Column>
              </Row>
              <Text
                className="common-pointer sm:ml-[295px] md:ml-[381px] ml-[559px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-white_A700 w-[auto]"
                variant="body1"
                onClick={handleNavigate2}
              >
                Careers
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                <Text
                  className="font-normal leading-[normal] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[39%]"
                  variant="body2"
                >
                  Mathura, Uttar Pradesh
                  <br />
                  India
                  <br />
                  8077982617
                  <br />
                  graczone@synticsapp.com
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-normal min-w-[25%] sm:ml-[145px] md:ml-[187px] ml-[273px] sm:mt-[20px] md:mt-[26px] mt-[39px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_900 text-center w-[max-content]"
                  onClick={handleNavigate}
                >
                  Get Started
                </Button>
              </Row>
              <Text
                className="sm:ml-[231px] md:ml-[299px] ml-[435px] mt-[106px] sm:mt-[56px] md:mt-[72px] not-italic text-white_A700 w-[auto]"
                variant="body4"
              >
                © 2023 Copyright : Syntics App Development
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
              <Text
                className="not-italic text-white_A700 w-[auto]"
                variant="body1"
              >
                Follow us on:
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                <Img
                  src="images/img_instagramlogo_33X32.png"
                  className="max-w-[100%] w-[28%]"
                  alt="InstagramLogo"
                />
                <Img
                  src="images/img_youtubelast1.png"
                  className="max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] w-[28%]"
                  alt="youtubelastOne"
                />
                <Img
                  src="images/img_linkedinpng81.png"
                  className="max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] w-[28%]"
                  alt="linkedInPNGEightyOne"
                />
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default VisionPage;
