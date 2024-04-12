import React from 'react'
import List from '@mui/material/List'
import Article from './Article'
import * as common from '../assets/js/common'

export default function NewsList() {
    const articles = [
        {
            date: '2024-04-07',
            title: `집단 유급 우려에도 의대들 수업 재개…복귀 분수령 가능성은?`,
            category: '사회',
            body: `의대들의 학생들이 증원 정책에 반발해 2월부터 휴강 중이었으나, 4월 중순부터 대량 유급 사태를 피하기 위해 수업을 재개하고 있다. 경북대는 8일부터 의대 수업을, 전북대는 8일부터 대면과 비대면 강의를 병행하여 시작한다. 다른 대학들도 이달 중하순을 개강의 \'마지노선\'으로 삼고 수업을 재개하며, 유급을 우려한 상황이다. 학교는 비대면 온라인 수업 등으로 대응하며 학생들의 복귀를 유도하고 있다.`
        },
        {
            date: '2024-04-07',
            title: `보조금·AI 반도체 수요 증가에 美 투자 속도내는 반도체 업계`,
            category: '경제',
            body: `미국 반도체 지원법에 따른 보조금 지급이 가시화되고 AI 반도체 수요가 늘면서 국내 반도체 기업들이 미국 투자를 늘리고 있다. 삼성전자는 텍사스주 반도체 투자를 2배로 늘려 440억달러로 확대하며, SK하이닉스는 인디애나주에 차세대 HBM 생산 기지를 낙점하고 38억7천만달러를 투자한다. 이는 미국 정부의 보조금과 AI 시장 수요 증가에 대응한 것이며, 어드밴스드 패키징 기술의 중요성도 강조된다.`
        },
        {
            date: '2024-04-07',
            title: `대만, 700회 가까운 여진 속 구조 총력…사망 13명·실종 6명`,
            category: '세계',
            body: `대만 화롄(花蓮)현에서는 규모 7 이상의 강진 후 여진이 지속되며, 지난 3일부터 닷새째 구조 작업이 진행 중이다. 이날까지 총 693회의 지진이 발생했으며, 여전히 규모 56의 지진이 24회, 45가 210회, 3~4가 456회 발생하는 등 여진이 계속되고 있다. 지진으로 인한 사망자는 13명으로, 6명이 여전히 실종 중이다. 타이루거 국가공원에서는 구조 작업이 진행되며, 어업 등 손실액은 약 29억원으로 집계되었다.`
        },
        {
            date: '2024-04-07',
            title: `美재무, 中총리에 "과잉생산 억제 필요…양국관계 관리해야"`,
            category: '세계',
            body: `미국 재무장관 재닛 옐런이 중국의 과잉 생산 문제를 중심으로 중국 2인자인 리창 총리와 회담을 진행하며 양국이 책임감 있게 관리해야 한다고 촉구했다. 옐런 장관은 미중 양국이 서로 소통하고 협력해야만 전진할 수 있다고 강조했고, 리 총리는 미중은 '적수'가 아닌 '파트너'여야 한다며 회답했다. 옐런 장관은 중국발 공급 과잉 문제를 지적하고 미국 기업과 노동자에게 공정한 경쟁 환경을 촉구했다. 미국은 중국의 디플레이션 수출과 부당한 경쟁 관행을 비판하며 중국에 불공정성을 지적했다.`
        },
        {
            date: '2024-04-07',
            title: `비와 동풍 덕 '작년 12월~올해 3월' 대기질 5년 사이 최고'`,
            category: '사회',
            body: `지난 겨울부터 지난달까지 초미세먼지(PM2.5) 농도는 최근 5년 사이 최저치인 21㎍/㎥로 기록되었다. 이는 환경부가 시행한 제5차 미세먼지 계절관리제 기간 중 가장 낮은 수치이며, '좋음' 등급인 날이 47일로 가장 많았다. 주된 이유로는 날씨가 안정되고 중국의 미세먼지 유입이 적었던 것이다. 또한 강수량이 평년의 2배가 넘는 302.8㎜로 많았고, 동풍이 많았던 것도 미세먼지를 줄이는 요인이었다. 대기오염 저감을 위해 392곳의 대형사업장과 협약을 체결하고, 28기의 발전기 정지와 47기의 출력 제한을 했으며, 배출가스 5등급 차량 운행 제한도 확대됐다.`
        }
    ];


    return (
        <div>
            <List>
                {articles.map((article, index) => (
                    <Article
                        key={index}
                        date={common.formatDate(article.date)}
                        title={article.title}
                        category={article.category}
                        body={article.body}
                    />
                ))}
            </List>
        </div>
    )
}