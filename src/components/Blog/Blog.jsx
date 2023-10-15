import styles from './Blog.module.scss';



function Blog() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Blog</h1>
            <div className={styles.blog}>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <span className={styles.task}>
                            Payment methods: Skrill, Neteller, webmoney, Bank transfer
                        </span>
                        <span className={styles.date}>10.02.2023</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.task}>
                            Payment methods: Skrill, Neteller, webmoney, Bank transfer
                        </span>
                        <span className={styles.date}>10.02.2023</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.task}>
                            Payment methods: Skrill, Neteller, webmoney, Bank transfer
                        </span>
                        <span className={styles.date}>10.02.2023</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.task}>
                            Payment methods: Skrill, Neteller, webmoney, Bank transfer
                        </span>
                        <span className={styles.date}>10.02.2023</span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.task}>
                            Payment methods: Skrill, Neteller, webmoney, Bank transfer
                        </span>
                        <span className={styles.date}>10.02.2023</span>
                    </div>
                </div>
                  
           
               
            </div>
        </div>
        
    )
}

export default Blog;