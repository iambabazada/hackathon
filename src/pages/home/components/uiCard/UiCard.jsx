import React from 'react'
import styles from './UiCard.module.css'
import HomeImg1 from '../../../../assets/images/home_1.png'
import HomeImg2 from '../../../../assets/images/home_2.png'
import HomeImg3 from '../../../../assets/images/home_3.png'

const UiCard = () => {
    return (
        <div className={styles.ui_cards}>
            <div className={styles.card_1}>
                <div className={styles.card_info}>
                    <h2>
                        Təmizlik, yaşıllıq aksiyası
                    </h2>
                    <p>
                        Artıq bir qayda olaraq hər il fevral ayından başlayaraq Xaçmazda təmizlik, yaşıllıq, abadlıq işlərinə həsr olunmuş iməciliklər keçirilir. Rayon icra hakimiyyətinin təşəbbüsü ilə bu il də ayın əvvəlindən ümumrayon iməciliklərinə start verilmişdir. Hər şənbə günü keçirilən təmizlik aksiyasında rayonun
                    </p>
                </div>
                <div className={styles.card_img}>
                    <img src={HomeImg1} alt="" />
                </div>
            </div>
            <div className={styles.card_2}>
                <div className={styles.card_info}>
                    <h2>
                        Təmizlik, yaşıllıq aksiyası
                    </h2>
                    <p>
                        Artıq bir qayda olaraq hər il fevral ayından başlayaraq Xaçmazda təmizlik, yaşıllıq, abadlıq işlərinə həsr olunmuş iməciliklər keçirilir. Rayon icra hakimiyyətinin təşəbbüsü ilə bu il də ayın əvvəlindən ümumrayon iməciliklərinə start verilmişdir. Hər şənbə günü keçirilən təmizlik aksiyasında rayonun
                    </p>
                </div>
                <div className={styles.card_img}>
                    <img src={HomeImg2} alt="" />
                </div>
            </div>
            <div className={styles.card_1}>
                <div className={styles.card_info}>
                    <h2>
                        Təmizlik, yaşıllıq aksiyası
                    </h2>
                    <p>
                        Artıq bir qayda olaraq hər il fevral ayından başlayaraq Xaçmazda təmizlik, yaşıllıq, abadlıq işlərinə həsr olunmuş iməciliklər keçirilir. Rayon icra hakimiyyətinin təşəbbüsü ilə bu il də ayın əvvəlindən ümumrayon iməciliklərinə start verilmişdir. Hər şənbə günü keçirilən təmizlik aksiyasında rayonun
                    </p>
                </div>
                <div className={styles.card_img}>
                    <img src={HomeImg3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default UiCard