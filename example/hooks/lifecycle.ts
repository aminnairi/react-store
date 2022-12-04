import { DependencyList, EffectCallback, useEffect } from "react";

export const useMounted = (callback: EffectCallback) => {
    useEffect(callback, [])
}

export const useDestroyed = (callback: ReturnType<EffectCallback>) => {
    useEffect(() => callback, [])
}

export const useWatcher = (dependencies: DependencyList, callback: EffectCallback) => {
    useEffect(callback, dependencies)
}