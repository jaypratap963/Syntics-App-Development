import React from "react";

import { Column, Stack, Row, Text, List, Img, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const SolutionsPage = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/careers");
  }
  function handleNavigate9() {
    navigate("/careers");
  }
  function handleNavigate10() {
    navigate("/vision");
  }
  function handleNavigate16() {
    navigate("/");
  }
  function handleNavigate17() {
    navigate("/vision");
  }
  function handleNavigate18() {
    navigate("/careers");
  }

  return (
    <>
      <Column className="bg-black_900 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[22px] pb-[33px] w-[100%]">
        <Stack className="h-[2309px] relative w-[100%]">
          <Stack className="absolute h-[2309px] w-[100%]">
            <Stack className="absolute bottom-[0] h-[2305px] w-[100%]">
              <Column
                className="absolute bg-cover bg-no-repeat flex flex-col justify-start sm:p-[15px] md:p-[34px] p-[50px] top-[-4px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group3.png')" }}
              >
                <Column className="flex flex-col items-center justify-start sm:mb-[278px] md:mb-[359px] mb-[523px] md:ml-[13px] ml-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                      <Text
                        className="common-pointer font-normal not-italic text-white_A700 w-[auto]"
                        as="h5"
                        variant="h5"
                        onClick={handleNavigate16}
                      >
                        Syntics App Development Pvt. Ltd.
                      </Text>
                      <Text
                        className="sm:ml-[193px] md:ml-[250px] ml-[430px] not-italic text-red_A200 w-[auto]"
                        variant="body1"
                      >
                        Solutions
                      </Text>
                      <Text
                        className="common-pointer sm:ml-[23px] md:ml-[30px] ml-[44px] not-italic text-white_A700 w-[auto]"
                        variant="body1"
                        onClick={handleNavigate17}
                      >
                        Vision
                      </Text>
                      <Text
                        className="common-pointer sm:ml-[23px] md:ml-[30px] ml-[44px] not-italic text-white_A700 w-[auto]"
                        variant="body1"
                        onClick={handleNavigate18}
                      >
                        Careers
                      </Text>
                    </Row>
                    <Text
                      className="leading-[normal] md:mt-[116px] mt-[170px] sm:mt-[90px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[58%]"
                      as="h2"
                      variant="h2"
                    >
                      Dive Into the New Age of
                      <br />
                      Accelerated Analytics
                    </Text>
                    <Text
                      className="font-semibold mt-[104px] sm:mt-[55px] md:mt-[71px] text-white_A700 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Our Services
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="absolute bg-black_901 border border-gray_400 border-solid bottom-[0] flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] md:pb-[117px] sm:pb-[15px] pb-[171px] sm:w-[100%] w-[91%]">
                <Stack className="h-[996px] relative w-[100%]">
                  <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                    <List
                      className="gap-[0] grid min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-black_901 border border-gray_400 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] sm:p-[15px] md:p-[17px] p-[26px] w-[100%]">
                        <Img
                          src="images/img_dataimage1.png"
                          className="h-[120px] sm:h-[64px] md:h-[83px] max-w-[100%] sm:ml-[21px] md:ml-[28px] ml-[41px] rounded-radius10 w-[120px] sm:w-[63px] md:w-[82px]"
                          alt="dataimageOne"
                        />
                        <Column className="flex flex-col md:mr-[45px] mr-[66px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                          <Text
                            className="font-semibold text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Android and IOS Application Development
                          </Text>
                          <Text
                            className="leading-[normal] text-justify sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-white_A700 w-[100%]"
                            variant="body3"
                          >
                            For startups and fledgling businesses, Android is
                            frequently recommended. Our Android development
                            services guarantee that it can support established
                            businesses and their SME counterparts in every way.
                            We are an Android development business with
                            experience in all areas of Android app development,
                            and we guarantee scalability.
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-black_901 border border-gray_400 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] sm:p-[15px] md:p-[34px] p-[50px] w-[100%]">
                        <Img
                          src="images/img_computericon1.png"
                          className="h-[120px] sm:h-[64px] md:h-[83px] max-w-[100%] md:ml-[11px] ml-[17px] sm:ml-[9px] rounded-radius10 w-[120px] sm:w-[63px] md:w-[82px]"
                          alt="computericonOne"
                        />
                        <Column className="flex flex-col sm:mb-[12px] md:mb-[16px] mb-[24px] md:mr-[28px] mr-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                          <Text
                            className="font-semibold text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Salesforce Implementation & Managment
                          </Text>
                          <Text
                            className="leading-[normal] text-justify sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-white_A700 w-[100%]"
                            variant="body3"
                          >
                            You can quickly set up your new Salesforce instance
                            with SAD because it provides everything you need! a
                            group of experts who are familiar with Salesforce to
                            assist you with anything and everything related to
                            Salesforce.
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-black_901 border border-gray_400 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] sm:p-[15px] md:p-[34px] p-[50px] w-[100%]">
                        <Img
                          src="images/img_graphimage1.png"
                          className="h-[120px] sm:h-[64px] md:h-[83px] max-w-[100%] md:ml-[11px] ml-[17px] sm:ml-[9px] rounded-radius10 w-[120px] sm:w-[63px] md:w-[82px]"
                          alt="graphimageOne"
                        />
                        <Column className="flex flex-col md:mr-[28px] mr-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                          <Text
                            className="font-semibold text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Mobile Application
                          </Text>
                          <Text
                            className="leading-[normal] text-justify sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-white_A700 w-[100%]"
                            variant="body3"
                          >
                            SAD is a highly regarded global provider of digital
                            solutions, offering full-cycle Java programming
                            services for desktop, mobile, and web applications.
                            With a blend of innovation and design thinking, our
                            Java developers are very skilled at creating
                            solutions that are trustworthy, feature-rich,
                            result-oriented, and high-performance.
                          </Text>
                        </Column>
                      </Row>
                      <Row className="bg-black_901 border border-gray_400 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] sm:p-[15px] md:p-[34px] p-[50px] w-[100%]">
                        <Img
                          src="images/img_cloudimage1.png"
                          className="h-[120px] sm:h-[64px] md:h-[83px] max-w-[100%] md:ml-[11px] ml-[17px] sm:ml-[9px] rounded-radius10 w-[120px] sm:w-[63px] md:w-[82px]"
                          alt="cloudimageOne"
                        />
                        <Column className="flex flex-col md:mr-[28px] mr-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                          <Text
                            className="font-semibold text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Cloud Analytics Modernization
                          </Text>
                          <Text
                            className="leading-[normal] text-justify sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-white_A700 w-[100%]"
                            variant="body3"
                          >
                            Real benefits of the cloud include increased
                            flexibility and agility as well as frequently
                            cheaper total cost of ownership. However, merely
                            switching to the cloud may mean giving up some of
                            the top skills they'll require in the long run and
                            right away.
                          </Text>
                        </Column>
                      </Row>
                    </List>
                  </Column>
                  <Line className="absolute bg-gray_400 sm:h-[531px] md:h-[686px] h-[980px] left-[20%] w-[1px]" />
                </Stack>
                <Text
                  className="font-normal leading-[normal] text-justify md:ml-[501px] ml-[770px] sm:mt-[109px] md:mt-[141px] mt-[240px] sm:mx-[0] not-italic text-gray_400 sm:w-[100%] w-[40%]"
                  variant="body2"
                >
                  We consider every facet of your task and work to present a
                  solution that will work best for your company. Additionally,
                  we take into account your financial capacities. We work with
                  both startups and well-established businesses, and we always
                  look for a solution that will be workable for a given client's
                  current capabilities.
                </Text>
              </Column>
            </Stack>
          </Stack>
          <Column
            className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col items-center justify-start left-[4.5%] sm:mx-[0] md:p-[103px] p-[113px] sm:p-[15px] sm:w-[100%] w-[46%]"
            style={{ backgroundImage: "url('images/img_group12.png')" }}
          >
            <Text
              className="leading-[normal] md:mb-[108px] mb-[157px] sm:mb-[83px] mt-[134px] sm:mt-[71px] md:mt-[92px] not-italic text-center text-white_A700 w-[100%]"
              as="h3"
              variant="h3"
            >
              We integrate with
              <br />
              Your Ecosystem
            </Text>
          </Column>
        </Stack>
        <Column className="flex flex-col items-center justify-start max-w-[1202px] ml-[auto] mr-[auto] mt-[126px] sm:mt-[67px] md:mt-[86px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
                    className="not-italic text-red_A200 w-[auto]"
                    variant="body1"
                  >
                    Solutions
                  </Text>
                  <Text
                    className="common-pointer sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-white_A700 w-[auto]"
                    variant="body1"
                    onClick={handleNavigate10}
                  >
                    Vision
                  </Text>
                </Column>
              </Row>
              <Text
                className="common-pointer sm:ml-[295px] md:ml-[381px] ml-[559px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-white_A700 w-[auto]"
                variant="body1"
                onClick={handleNavigate9}
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
                  onClick={handleNavigate8}
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

export default SolutionsPage;
