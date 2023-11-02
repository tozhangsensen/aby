import React, { memo, useEffect, useState } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchHomeDataAction } from "@/store/modules/home"
import HomeBanner from "./c-cpns/home-banner"
import { HomeWrapper } from "./style"
import SectionHeader from "@/components/section-header"
import SectionRooms from "@/components/section-rooms"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
// import SectionTabs from "@/components/section-tabs"
import HomeLongfor from "./c-cpns/home-longfor"
import HomeSectionV3 from "./c-cpns/home-section-v3"

import { isEmptyO } from "@/utils"

const Home = memo(() => {
  // 测试
  // const [highScore, setHighScore] = useState({})

  // 网络请求的代码
  // useEffect(() => {
  //   hyRequest.get({ url: "/home/highscore" }).then((res) => {
  //     console.log(res)
  //     setHighScore(res)
  //   })
  // }, []) //什么都不依赖哦，就只渲染一次

  /** 网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    // 请求步骤1
    dispatch(fetchHomeDataAction("传递数据xxxx"))
  }, [dispatch])

  // const { goodPriceInfo } = useSelector(
  //   (state) => ({
  //     goodPriceInfo: state.home.goodPriceInfo,
  //   }),
  //   shallowEqual
  // )
  /** 从redux中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  )
  // 在 react-redux 库中，shallowEqual 用于比较前后两次 useSelector 返回的状态值，以确定是否触发组件的重新渲染。只有在状态发生实际变化时才会重新渲染组件，从而提高性能。

  //tab切换功能
  //数据转化
  // const tabNames = discountInfo.dest_address?.map((item) => item.name)
  // function tabClick(index, item) {
  //   console.log(index, item)
  //   setName(item)
  // }

  //使用useCallback性能优化，(给子组件传递函数就应该想到)
  // const tabClickHandle = useCallback(function (index, name) {
  //     console.log(index,item)
  // }, [])
  //根据子组件点击传过来信息,动态展示不同区域的roomlist，roomlist刚开始是写死的成都
  // const [name, setName] = useState("佛山")

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {/* 不封装写法 */}

        {/* 好评 */}
        {/* <div className="good-price">
          <SectionHeader title={goodPriceInfo?.title} />
          <SectionRooms roomList={goodPriceInfo?.list} />
        </div> */}
        {/* 高分 */}
        {/* <div className="good-price">
          <SectionHeader title={highScoreInfo.title} />
          <SectionRooms roomList={highScoreInfo.list} />
        </div>  */}
        {/* 热门
        <SectionHeader title={discountInfo.title} />
        <SectionTabs tabNames={tabNames} itemWidth="50%" tabClick={tabClick} />
        {/* <SectionRooms roomList={discountInfo?.dest_list?.['成都']} itemWidth="50%"/> */}
        {/* <SectionRooms roomList={discountInfo?.dest_list?.[name]}itemWidth="50%"/> */}

        {/* 封装写法 */}
        {/* <HomeSectionV2 infoData={discountInfo}></HomeSectionV2> */}
        {/* discountInfo请求有结果再进行渲染，解决第一次拿不到默认值的问题 */}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>
        <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>
        {isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home
