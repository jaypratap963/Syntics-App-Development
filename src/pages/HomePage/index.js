import React from "react";

import { Column, Stack, Row, Text, Button, Line, Img } from "components";
import { useNavigate } from "react-router-dom";

const HomePagePage = () => {
  const navigate = useNavigate();

  function handleNavigate14() {
    navigate("/vision");
  }
  function handleNavigate15() {
    navigate("/careers");
  }
  function handleNavigate19() {
    navigate("/careers");
  }
  function handleNavigate20() {
    navigate("/solutions");
  }
  function handleNavigate21() {
    navigate("/careers");
  }
  function handleNavigate22() {
    navigate("/solutions");
  }
  function handleNavigate23() {
    navigate("/careers");
  }
  function handleNavigate24() {
    navigate("/solutions");
  }
  function handleNavigate25() {
    navigate("/solutions");
  }
  function handleNavigate26() {
    navigate("/vision");
  }

  return (
    <>
      <Column className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[18px] pb-[27px] w-[100%]">
        <Stack className="h-[2046px] relative w-[100%]">
          <Column className="absolute flex flex-col items-center justify-start top-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col justify-start sm:p-[15px] md:p-[34px] p-[50px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group3.png')" }}
              >
                <Column className="flex flex-col items-center justify-start sm:mb-[216px] md:mb-[279px] mb-[406px] md:ml-[13px] ml-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Text
                        className="font-normal not-italic text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Syntics App Development Pvt. Ltd.
                      </Text>
                      <Text
                        className="common-pointer sm:ml-[193px] md:ml-[250px] ml-[364px] not-italic text-white_A700 w-[auto]"
                        variant="body1"
                        onClick={handleNavigate25}
                      >
                        Solutions
                      </Text>
                      <Text
                        className="common-pointer sm:ml-[23px] md:ml-[30px] ml-[44px] not-italic text-white_A700 w-[auto]"
                        variant="body1"
                        onClick={handleNavigate26}
                      >
                        Vision
                      </Text>
                      <Text
                        className="common-pointer sm:ml-[23px] md:ml-[30px] ml-[44px] not-italic text-white_A700 w-[auto]"
                        variant="body1"
                        onClick={handleNavigate19}
                      >
                        Careers
                      </Text>
                    </Row>
                    <Text
                      className="leading-[normal] md:mt-[116px] mt-[170px] sm:mt-[90px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[67%]"
                      as="h2"
                      variant="h2"
                    >
                      The New Standard in
                      <br />
                      Mobile and Web Applications
                    </Text>
                    <Text
                      className="font-normal leading-[normal] sm:mt-[24px] md:mt-[31px] mt-[46px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[37%]"
                      as="h5"
                      variant="h5"
                    >
                      A growing Startup to develop <br />
                      Hybrid Applications
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-normal min-w-[15%] sm:mt-[35px] md:mt-[46px] mt-[67px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_900 text-center w-[max-content]"
                      onClick={handleNavigate24}
                    >
                      Learn More
                    </Button>
                  </Column>
                </Column>
              </Column>
              <Row className="bg-black_901 border border-gray_400 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:pr-[15px] md:pr-[55px] pr-[80px] sm:w-[100%] w-[89%]">
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-center sm:mx-[0] p-[102px] sm:p-[15px] md:p-[70px] sm:w-[100%] w-[45%]"
                  style={{ backgroundImage: "url('images/img_group4.png')" }}
                >
                  <Column className="flex flex-col items-center justify-start sm:my-[44px] md:my-[57px] my-[83px] sm:px-[0] w-[100%]">
                    <Text
                      className="leading-[normal] not-italic text-white_A700 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      With our wide range of services, let your ideas come to
                      life.
                    </Text>
                    <Text
                      className="leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] not-italic text-gray_800 sm:w-[100%] w-[99%]"
                      variant="body3"
                    >
                      Use our tools to help you bring your ideas to life. We
                      really think that nothing is insurmountable, thus
                      regardless of your priorities, constraints, or time
                      constraints, we will competently resolve any issue.
                      unprofessional services
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-black_902 flex flex-col items-center justify-start mb-[114px] sm:mb-[60px] md:mb-[78px] ml-[112px] md:ml-[77px] sm:mt-[120px] md:mt-[155px] mt-[226px] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[25px] rounded-radius22 sm:w-[100%] w-[23%]">
                  <Text
                    className="font-normal leading-[normal] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] not-italic text-light_blue_500 sm:w-[100%] w-[99%]"
                    variant="body2"
                  >
                    Full Customer
                    <br />
                    Experience analytics
                  </Text>
                  <Text
                    className="leading-[normal] sm:mt-[19px] md:mt-[25px] mt-[37px] sm:mx-[0] not-italic text-bluegray_100 sm:w-[100%] w-[97%]"
                    variant="body4"
                  >
                    We'll assist you in organising not only what happens to you,
                    but also everything else.
                  </Text>
                  <Line className="bg-gray_600 h-[10px] mb-[13px] sm:mb-[6px] md:mb-[8px] sm:mt-[45px] md:mt-[59px] mt-[86px] sm:w-[100%] w-[97%]" />
                </Column>
                <Column className="bg-black_902 flex flex-col justify-end sm:mb-[121px] md:mb-[156px] mb-[228px] md:ml-[15px] ml-[23px] mt-[112px] sm:mt-[59px] md:mt-[77px] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[25px] rounded-radius22 sm:w-[100%] w-[23%]">
                  <Text
                    className="font-normal leading-[normal] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] not-italic text-light_blue_500 sm:w-[100%] w-[70%]"
                    variant="body2"
                  >
                    Web Software <br />
                    Development
                  </Text>
                  <Text
                    className="leading-[normal] sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] not-italic text-bluegray_100 sm:w-[100%] w-[97%]"
                    variant="body4"
                  >
                    With us, anything is possible, even the seemingly
                    impossible. Software of any complexity under the most trying
                    circumstances.
                  </Text>
                  <Line className="bg-gray_600 h-[10px] sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mt-[28px] md:mt-[36px] mt-[53px] sm:w-[100%] w-[97%]" />
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="absolute bg-black_902 bottom-[27%] flex flex-col justify-start sm:mx-[0] overflow-y-visible sm:p-[15px] md:p-[17px] p-[25px] right-[31%] rounded-radius22 sm:w-[100%] w-[19%]">
            <Text
              className="font-normal leading-[normal] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] not-italic text-light_blue_500 sm:w-[100%] w-[89%]"
              variant="body2"
            >
              Mobile Application
              <br />
              Development
            </Text>
            <Text
              className="leading-[normal] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] not-italic text-bluegray_100 sm:w-[100%] w-[95%]"
              variant="body4"
            >
              There are mobile apps for iOS and Android to suit every
              preference.
            </Text>
            <Line className="bg-gray_600 h-[10px] sm:mb-[13px] md:mb-[17px] mb-[25px] sm:mt-[39px] md:mt-[50px] mt-[74px] sm:w-[100%] w-[97%]" />
          </Column>
          <Column className="absolute bg-black_902 bottom-[-250px] flex flex-col gap-[px] justify-end sm:mx-[0] md:p-[15px] sm:p-[15px] p-[23px] right-[11%] rounded-radius22 sm:w-[100%] w-[19%]">
            <Text
              className="font-normal leading-[normal] ml-[2px] sm:mt-[27px] md:mt-[35px] mt-[52px] sm:mx-[0] not-italic text-light_blue_500 sm:w-[100%] w-[87%]"
              variant="body2"
            >
              Salesforce Implementation & Managment
            </Text>
            <Text
              className="leading-[normal] ml-[2px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] not-italic text-bluegray_100 sm:w-[100%] w-[94%]"
              variant="body4"
            >
              This data is used by the tool to enable a range of analytics use
              cases, including building dashboards, visualisations, and cloud
              reporting.
            </Text>
            <Line className="bg-gray_600 h-[10px] md:mb-[10px] mb-[15px] sm:mb-[7px] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:w-[100%] w-[95%]" />
          </Column>
        </Stack>
        <Column className="flex flex-col items-center justify-start max-w-[1275px] ml-[auto] mr-[auto] sm:mt-[51px] md:mt-[66px] mt-[96px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="bg-black_901 border border-gray_400 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between m-[250px] sm:pr-[15px] md:pr-[52px] pr-[76px] w-[100%]">
            <Column
              className="bg-cover bg-no-repeat flex flex-col items-end sm:mx-[0] sm:p-[15px] md:p-[64px] p-[94px] sm:w-[100%] w-[50%]"
              style={{ backgroundImage: "url('images/img_group5.png')" }}
            >
              <Text
                className="font-normal leading-[normal] sm:mb-[140px] md:mb-[180px] mb-[263px] sm:mt-[107px] md:mt-[138px] mt-[201px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[91%]"
                as="h5"
                variant="h5"
              >
                Unprecedented Velocity.
                <br />
                Impeccable Reliability.
              </Text>
            </Column>
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[41%]">
              <Text
                className="font-normal leading-[normal] not-italic text-gray_400 w-[100%]"
                variant="body2"
              >
                Our web application development and custom programming services
                are tailored with the care that includes everything from a
                simple content management system to the most complex web-based
                applications, architecture, workflow interfaces, social
                networking development services, and e-commerce portals.
                <br />​<br />
                {`We comprehend this better than anybody else because every client has unique situations and wants. We offer complete warranty coverage and support for our products. Even in the most atypical circumstances, we won't ignore our commitments; instead, we'll work together with you to ensure that the software we've developed benefits your company 100 percent of the time.`}
              </Text>
              <Button
                className="common-pointer cursor-pointer font-normal min-w-[38%] sm:mt-[20px] md:mt-[26px] mt-[39px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_900 text-center w-[max-content]"
                onClick={handleNavigate20}
              >
                Learn More
              </Button>
            </Column>
          </Row>
          <Stack className="h-[980px] sm:mt-[154px] md:mt-[200px] mt-[291px] relative w-[100%]">
            <div className="absolute bg-black_901 border border-gray_400 border-solid bottom-[0] sm:h-[404px] md:h-[522px] h-[758px] w-[100%]"></div>
            <Column className="absolute flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Row className="bg-black_901 border border-gray_400 border-solid bottom-[-250px] flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end m-[px] p-[23px] sm:px-[15px] md:px-[86px] w-[100%]">
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                    <Text
                      className="font-crimsonpro not-italic text-red_A200 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      50
                    </Text>
                    <Text
                      className="font-inter sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-gray_400 w-[auto]"
                      variant="body1"
                    >
                      Tech Support
                    </Text>
                  </Column>
                  <Line className="bg-gray_400 sm:h-[119px] md:h-[153px] h-[222px] ml-[119px] sm:ml-[63px] md:ml-[81px] w-[1px]" />
                  <Column className="flex flex-col items-center md:ml-[103px] ml-[150px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                    <Text
                      className="font-crimsonpro not-italic text-red_A200 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      100+
                    </Text>
                    <Text
                      className="font-inter sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_400 w-[auto]"
                      variant="body1"
                    >
                      Customers
                    </Text>
                  </Column>
                  <Line className="bg-gray_400 sm:h-[119px] md:h-[153px] h-[222px] md:ml-[104px] ml-[152px] sm:ml-[80px] w-[1px]" />
                  <Column className="flex flex-col items-center ml-[118px] md:ml-[81px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
                    <Text
                      className="font-crimsonpro not-italic text-red_A200 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      10k
                    </Text>
                    <Text
                      className="font-inter sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-gray_400 w-[auto]"
                      variant="body1"
                    >
                      Products Vision
                    </Text>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[102px] sm:p-[15px] md:p-[70px] sm:w-[100%] w-[54%]"
                    style={{ backgroundImage: "url('images/img_group6.png')" }}
                  >
                    <Text
                      className="font-normal leading-[normal] sm:mb-[143px] md:mb-[185px] mb-[269px] sm:mt-[110px] md:mt-[142px] mt-[207px] not-italic text-white_A700 w-[100%]"
                      as="h5"
                      variant="h5"
                    >
                      Are You Ready to Accelerate
                      <br />
                      Your Business ?
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start ml-[125px] md:ml-[86px] sm:mt-[126px] md:mt-[163px] mt-[237px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                    <Text
                      className="font-normal leading-[normal] not-italic text-gray_400 w-[100%]"
                      variant="body2"
                    >
                      Get in touch with our team, and we'll start by having the
                      initial talk. Create a web application with us. To contact
                      us and receive a configured portfolio for the sector of
                      interest please click on the button below.
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-normal min-w-[42%] sm:mt-[41px] md:mt-[52px] mt-[77px] not-italic sm:text-[20px] md:text-[22px] text-[24px] text-bluegray_900 text-center w-[max-content]"
                      onClick={handleNavigate15}
                    >
                      Get Started
                    </Button>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Column className="flex flex-col items-center justify-start md:mt-[105px] mt-[153px] sm:mt-[81px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
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
                      onClick={handleNavigate22}
                    >
                      Solutions
                    </Text>
                    <Text
                      className="common-pointer sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-white_A700 w-[auto]"
                      variant="body1"
                      onClick={handleNavigate14}
                    >
                      Vision
                    </Text>
                  </Column>
                </Row>
                <Text
                  className="common-pointer sm:ml-[295px] md:ml-[381px] ml-[554px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-white_A700 w-[auto]"
                  variant="body1"
                  onClick={handleNavigate23}
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
                    onClick={handleNavigate21}
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
                    src="images/img_instagramlogo.png"
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
      </Column>
    </>
  );
};

export default HomePagePage;
