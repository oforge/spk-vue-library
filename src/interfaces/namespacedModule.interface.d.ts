import {
  ActionMethod,
  Computed,
  Mapper, MapperForAction, MapperForActionWithNamespace,
  MapperForMutation, MapperForMutationWithNamespace,
  MapperForState,
  MapperForStateWithNamespace,
  MapperWithNamespace,
  MutationMethod
} from "vuex";

export interface NamespacedModuleInterface {
  mapState: Mapper<Computed>
    & MapperWithNamespace<Computed>
    & MapperForState
    & MapperForStateWithNamespace;
  mapMutations: Mapper<MutationMethod>
    & MapperWithNamespace<MutationMethod>
    & MapperForMutation
    & MapperForMutationWithNamespace;
  mapGetters: Mapper<Computed>
    & MapperWithNamespace<Computed>;
  mapActions: Mapper<ActionMethod>
    & MapperWithNamespace<ActionMethod>
    & MapperForAction
    & MapperForActionWithNamespace;
}