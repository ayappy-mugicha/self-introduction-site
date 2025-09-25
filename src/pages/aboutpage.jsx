import React from 'react';
import '../App.css'
import { username } from './homepage'

function About() {
    const age = 18;
    return (
        <>
            <h1>自己紹介</h1>
            <p>
                始めました、{username}です。<br />
                {age}才で、おもにpythonを作ったプログラムを学んでます。<br />
                最近は、バイトの業務開発でreactとjsを使うということで、<br />
                簡単なweb開発を勉強するために、作りました。<br />
            </p>
            <p>
                専門学校東京テクニカルカレッジIoT+AI科1年です。 <br/>
                趣味はギターとゲームですね。<br />
                平日は、プログラムをして休日にはギターを弾いてます。<br />
                隙間時間にゲームを少ししています。ホームを見ればわかりますが、<br />
                ブルーアーカイブをやっています。
            </p>
            <p>
                将来的には、チームみらいに入り、<br/>
                党首の安野さんと一緒に、日本を豊かにしていきたいと思います。<br/>
            </p>
        </>
    )
}

export default About;