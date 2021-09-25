import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurrentUSer = createSelector(
    [selectUser],
    user => user.currentUser
)

// export const selectCurrentUserName = createSelector(
//     [selectCurrentUSer],
//     currentUser => currentUser
// )