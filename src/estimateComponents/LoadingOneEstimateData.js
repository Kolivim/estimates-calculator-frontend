function LoadingOneEstimateData(Component) {
    return function LoadingOneEstimateData({ isLoading, ...props }) {

        if (!isLoading) return <Component {...props} />
        else return (
            <div>
                <h1>Подождите, данные сметного рассчёта загружаются!</h1>
            </div>
        )

    }
}

export default LoadingOneEstimateData
