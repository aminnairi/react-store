import React from "react"
import { Profile } from "../components/profile"
import { ProfileError } from "../components/profile-error"
import { ProfileLoader } from "../components/profile-loader"
import { useUser } from "../hooks/user"

export const ProfilePage = () => {
    const { loading, error } = useUser()

    if (error) {
        return <ProfileError error={error} />
    }

    if (loading) {
        return <ProfileLoader />
    }

    return (
        <Profile />
    )
}