import Cookie from 'js-cookie';
import { CreateUser, GetUser, GetUsers, UpdateUser } from '../../query/user';
import type {
	GetUserResponse,
	GetUserRequest,
	GetUsersResponse,
	CreateUserResponse,
	CreateUserRequest,
	UpdateUserRequest,
	UpdateUserResponse,
} from '../../query/user';
import { mutation, query } from 'svelte-apollo';
import type { GQLAddUserInput, GQLUserFilter, GQLUserPatch } from 'src/graphql.schema';

export const currentUser = () => {
	const token = Cookie.get('token') ?? 'ERROR';

	const user = query<GetUserResponse, GetUserRequest>(GetUser, {
		variables: {
			id: token,
		},
	});

	return user;
};

export const createUser = () => {
	const { refetch } = query<GetUsersResponse, { filter: GQLUserFilter }>(GetUsers);
	const create = mutation<CreateUserResponse, CreateUserRequest>(CreateUser);

	return async (user: GQLAddUserInput) => {
		try {
			const { data } = await refetch({
				filter: {
					userId: {
						eq: user.userId,
					},
				},
			});

			if (data.queryUser[0]) {
				return undefined;
			}

			const response = await create({
				variables: {
					input: [user],
				},
			});

			const responseUser = response.data?.addUser.user[0];

			if (responseUser) {
				Cookie.set('token', responseUser.id);
			}

			return responseUser;
		} catch (error) {
			console.log(error);
		}
	};
};

export const updateUser = (user: GQLUserPatch) => {
	const response = query<UpdateUserResponse, UpdateUserRequest>(UpdateUser, {
		variables: {
			id: user.userId,
			set: user,
		},
	});

	return response;
};
